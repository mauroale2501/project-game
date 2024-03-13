package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

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

    @GetMapping("/keyLevel/{level}")
    public ResponseEntity<String> getKeyLevel(@PathVariable int level) {
        String message;
        String keyLevel2;

        if (level == 1) {
            return ResponseEntity.ok(service.getKeyById(level));

        } else if (level == 2) {
            keyLevel2 = service.getKeyById(level);
            message = "oops! maybe you should look elsewhere";

        } else {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .header("THIS-MIGHT-BE-THE-KEY-BUT-YOU-HAVE-TO-UNCODE", keyLevel2)
                .body(message);
    }

//    @GetMapping("/keyLevel/{key}")
//    public ResponseEntity<String> getKeyLevel(@PathVariable int key) {
//    String keyLevel = service.getKeyById(key);
//        return ResponseEntity.ok(keyLevel);
//    }


    private int calculateFirstHintId(int level) {
        int levelAdjust = level - 1;
        int hintsForLevel = 2;

        int firstHintId = levelAdjust * hintsForLevel + 1;

        return firstHintId;
    }
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

