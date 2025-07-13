import React, { Children, ReactNode, useEffect, forwardRef, useImperativeHandle, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
    useSharedValue,
    useAnimatedProps,
    withTiming,
    useAnimatedStyle,
    useDerivedValue,
    useAnimatedReaction,
    runOnJS,

} from 'react-native-reanimated';
import type { AnimatedProps } from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface AvatarRingRef {
    startAnimation: () => void;
    flipRing: () => void;
    triggerWin: () => void;
  

}

interface Props {
    AVATAR_SIZE: number | string,
    RING_SIZE: number,
    RADIUS: number,
    STROKE_WIDTH: number,
    TIME: number,
    BORDER_RADIUS: Number
    frontImage: any
    backImage: any

}

const AvatarRing = ({
    RING_SIZE,
    RADIUS,
    STROKE_WIDTH = 5,
    TIME = 5,
    frontImage,
    backImage
}: Props, ref: React.Ref<AvatarRingRef>) => {

    const progress = useSharedValue(0);
    const rotation = useSharedValue(0);
    const ringScale = useSharedValue(0);
    const textScale = useSharedValue(0)
    const looseTextScale = useSharedValue(0);


   
    const [showText, setShowText] = useState(false)
    const [showBack, setShowBack] = useState(false)
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    const startAnimation = () => {
        progress.value = withTiming(1, { duration: TIME * 1000 });
    };
    const flipRing = () => {
        rotation.value = withTiming(rotation.value === 180 ? 0 : 180, { duration: 800 });
    };
    const winRingStyle = useAnimatedStyle(() => ({
        transform: [{ scale: ringScale.value }],
        opacity: ringScale.value,
    }));

    const textStyle = useAnimatedStyle(() => ({
        transform: [{ scale: textScale.value }],
        opacity: textScale.value,
    }));


    const triggerWin = () => {
        ringScale.value = 0;
        textScale.value = 0;
        setShowText(false);

        ringScale.value = withTiming(1, { duration: 800 });
        textScale.value = withTiming(1, { duration: 600 }, () => {
            runOnJS(setShowText)(true);
        });
    };

   

    useImperativeHandle(ref, () => ({
        startAnimation,
        flipRing,
        triggerWin
    }));

    const animatedProps: AnimatedProps<Circle> = useAnimatedProps(() => ({
        strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
    }));
    const ringStyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 800 },
            { rotateY: `${rotation.value}deg` },
        ],
    }));
    useAnimatedReaction(
        () => rotation.value,
        (current, previous) => {
            if (
                previous !== null &&
                ((previous < 90 && current >= 90) || (previous >= 90 && current < 90))
            ) {
                runOnJS(setShowBack)(current >= 90);
            }
        }
    );

    return (
        <>
            <Animated.View style={[styles.container, { width: RING_SIZE, height: RING_SIZE }, ringStyle]}>

                <View style={[
                    styles.avatarWrapper,
                    {
                        width: RADIUS * 2,
                        height: RADIUS * 2,
                        borderRadius: RADIUS,
                    }
                ]}>

                    <Animated.Image
                        source={showBack ? backImage : frontImage}
                        style={{
                            width: '60%',
                            height: '60%',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }}
                    />
                    <Svg width={RING_SIZE} height={RING_SIZE} style={styles.svg}>
                        <AnimatedCircle
                            cx={RING_SIZE / 2}
                            cy={RING_SIZE / 2}
                            r={RADIUS}
                            stroke="#00f"
                            strokeWidth={STROKE_WIDTH}
                            strokeDasharray={CIRCUMFERENCE}
                            animatedProps={animatedProps}
                            fill="none"
                        />
                    </Svg>
                </View>

            </Animated.View>
            <Animated.View
                style={[
                    styles.ring,
                    {
                        width: RADIUS * 2.2,
                        height: RADIUS * 2.2,
                        borderRadius: RADIUS * 1.1,
                        
                    },
                    winRingStyle,
                ]}
            />
            {showText && (
                <Animated.Text style={[styles.winText, textStyle]}>
                    WIN
                </Animated.Text>
            )}

        </>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    avatarWrapper: {
        backgroundColor: '#FFFFFF',
        elevation: 6,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    svg: {
        position: 'absolute',
    },
    ring: {
        position: 'absolute',
        borderWidth: 5,
        borderColor:'#FFD700',
        backgroundColor: 'transparent',
    },
    winText: {
        position: 'absolute',
        bottom: '99%',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gold',
        letterSpacing: 2,
        backfaceVisibility: 'hidden',
    },
});


export default forwardRef(AvatarRing);
