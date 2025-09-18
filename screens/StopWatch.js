import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isClockRunnig, setIsClockRunnig] = useState(false);
  const [isPaused, setisPaused] = useState(false);

  useEffect(() => {
    if (isClockRunnig) {
      setTimeout(() => {
        setMilliseconds((prevState) => Math.floor((prevState + 10) % 1000));
        if (milliseconds + 10 === 1000)
          setSeconds((prevState) => Math.floor((prevState + 1) % 60));
        if (seconds + 1 === 60) {
          setMinutes((prevState) => prevState + 1);
        }
        if (minutes + 1 === 60) {
          setHours((prevState) => prevState + 1);
        }
      }, 10);
    }
  }, [minutes, seconds, hours, isClockRunnig, milliseconds]);
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{`${hours}:${minutes}:${seconds}:${
        milliseconds / 10
      }`}</Text>
      <View style={styles.buttonContainer}>
        {!isClockRunnig && !isPaused && (
          <>
            <Button
              title="Start"
              onPress={() => {
                setIsClockRunnig(true);
              }}
            ></Button>
          </>
        )}
        {(isClockRunnig || isPaused) && (
          <>
            <Button
              title="Reset"
              onPress={() => {
                setIsClockRunnig(false);
                setisPaused(false);
                setMilliseconds(0);
                setSeconds(0);
                setMinutes(0);
                setHours(0);
              }}
            ></Button>
            <Button
              title={isPaused ? "Resume" : "Pause"}
              onPress={() => {
                if (isPaused) {
                  setIsClockRunnig(true);
                  setisPaused(false);
                } else {
                  setIsClockRunnig(false);
                  setisPaused(true);
                }
              }}
            ></Button>
          </>
        )}
      </View>
    </View>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  time: {
    fontSize: 44,
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    color: "black",
    textDecoration: "none",
  },
});
