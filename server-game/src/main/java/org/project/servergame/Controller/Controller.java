package org.project.servergame.Controller;

import jakarta.servlet.http.HttpSession;
import org.project.servergame.GameService;
import org.project.servergame.TimerData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

    private LocalDateTime startTime;
    private LocalDateTime stopTime;
    private static int timeLeft = 0;
    private int lastHintId = 0;

    public Controller(GameService service) {
        this.service = service;
    }

    @GetMapping("/hints")
    public String getHintLevel1() {
        String nextHint = service.getHintStringLevel1(lastHintId);
        lastHintId++;

        return nextHint;
    }
//    @GetMapping("/hintsLevel2")
//    public String getHintLevel2() {
//        String nextHint = service.getHintStringLevel2(lastHintId);
//        lastHintId++;
//
//        return nextHint;
//    }


//    @GetMapping("/hints")
//    public String getRandomHintString() {
//        return service.getRandomHintString();
//    }


//    @GetMapping( "/hints")
//    public ResponseEntity<String> getHintById() {
//        return ResponseEntity.ok(service.getHint());
//    }

    @GetMapping("/keyLevel1")
    public ResponseEntity<String> getKeyLevel1(){
        return ResponseEntity.ok(service.getKey());
    }



    @PostMapping("/start")
    public ResponseEntity<?> startTimer() {
        startTime = LocalDateTime.now();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/stop")
    public ResponseEntity<?> stopTimer() {
        stopTime = LocalDateTime.now();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getTimerStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("startTime", startTime);
        status.put("stopTime", stopTime);
        return ResponseEntity.ok(status);
    }
    @GetMapping("/api/timeLeft")
    public ResponseEntity<Integer> getTimeLeft() {
        return ResponseEntity.ok(timeLeft);
    }

    @PutMapping("/api/timeLeft")
    public ResponseEntity<Void> updateTimeLeft(@RequestBody int newTimeLeft) {
        timeLeft = newTimeLeft;
        return ResponseEntity.noContent().build();
    }
}

