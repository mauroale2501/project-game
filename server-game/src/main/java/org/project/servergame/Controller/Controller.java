package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

    private LocalDateTime startTime;
    private LocalDateTime stopTime;
    private static int timeLeft = 0;
//    private int lastHintId = 0;

    public Controller(GameService service) {
        this.service = service;
    }

    @GetMapping("/hints/{level}")
    public String getHintLevel(@PathVariable int level) {
        int startHint = calculateFirstHintId(level);

        String hint = service.getHintStringByLevel(startHint);
        service.incrementHintId(startHint);

        return hint;
    }
    private int calculateFirstHintId(int level) {
        int levelAdjust = level - 1;
        int hintsForLevel = 2;

        int firstHintId = levelAdjust * hintsForLevel + 1;

        return firstHintId;
    }


//    -----------
//    @GetMapping("/hintsLevel2")
//    public String getHintLevel2() {
//        String nextHint = service.getHintStringLevel2(lastHintId);
//        lastHintId++;
//
//        return nextHint;
//    }


//    @GetMapping("/keyLevel1")
//    public ResponseEntity<String> getKeyLevel1(){
//        return ResponseEntity.ok(service.getKey());
//    }
//
//    @PostMapping("/start")
//    public ResponseEntity<?> startTimer() {
//        startTime = LocalDateTime.now();
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping("/stop")
//    public ResponseEntity<?> stopTimer() {
//        stopTime = LocalDateTime.now();
//        return ResponseEntity.ok().build();
//    }
//
//    @GetMapping("/status")
//    public ResponseEntity<Map<String, Object>> getTimerStatus() {
//        Map<String, Object> status = new HashMap<>();
//        status.put("startTime", startTime);
//        status.put("stopTime", stopTime);
//        return ResponseEntity.ok(status);
//    }
//    @GetMapping("/api/timeLeft")
//    public ResponseEntity<Integer> getTimeLeft() {
//        return ResponseEntity.ok(timeLeft);
//    }
//
//    @PutMapping("/api/timeLeft")
//    public ResponseEntity<Void> updateTimeLeft(@RequestBody int newTimeLeft) {
//        timeLeft = newTimeLeft;
//        return ResponseEntity.noContent().build();
//    }
}

