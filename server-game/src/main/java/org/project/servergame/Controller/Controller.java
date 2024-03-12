package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.project.servergame.tables.Hint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

    public Controller(GameService service) {
        this.service = service;
    }
//    private Long startTime;
//    private Long endTime;



//    @GetMapping("/hints")
//    public ResponseEntity<String> getHint() {
//        return ResponseEntity.ok("Here we are");
//    }
//    @GetMapping( "/hints")
//    public ResponseEntity<String> getHintById() {
//        return ResponseEntity.ok(service.getHint());
//    }
}

//        try {
//            Hint hint = service.getById(id);
//            return ResponseEntity.ok(hint.getHint());
//        } catch (NoSuchElementException e) {
//            return ResponseEntity.notFound().build();
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.badRequest().build();
//        } catch (Exception e) {
//            return ResponseEntity.internalServerError().build();
//        }
//    }
//    @PostMapping("/start-time")
//    public ResponseEntity<String> setStartTime(@RequestBody Map<String, Long> body) {
//        startTime = body.get("startTime");
//        return ResponseEntity.ok("Start time set");
//    }
//
//    @PostMapping("/end-time")
//    public ResponseEntity<String> setEndTime(@RequestBody Map<String, Long> body) {
//        endTime = body.get("endTime");
//        return ResponseEntity.ok("End time set");
//    }
//
//
//
////    @PostMapping("/start")
////    public ResponseEntity<String> startTimer() {
////        service.startTimer();
////        return ResponseEntity.ok("Timer started");
////    }
//
//    @PostMapping("/half")
//    public ResponseEntity<String> halfTime() {
//        service.halfTime();
//        return ResponseEntity.ok("Timer halved");
//    }

