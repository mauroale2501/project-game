package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.project.servergame.tables.CurrentGame;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

    public Controller(GameService service) {
        this.service = service;
    }
    @PostMapping("/startTimer")
    public ResponseEntity<?> startTimer(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        String levelString = request.get("level");
        int level = Integer.parseInt(levelString);

        LocalDateTime startDateNoFormatted = LocalDateTime.now();
       LocalDateTime startDate = formatterDate(startDateNoFormatted);
        int timerId = service.save(new CurrentGame(level,userId,startDate,null)).getId();

        return new ResponseEntity<>(timerId, HttpStatus.OK);
    }

    public LocalDateTime formatterDate (LocalDateTime date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDate = date.format(formatter);
        LocalDateTime finalDate = LocalDateTime.parse(formattedDate, formatter);
        return finalDate;
    }

//        String startDateString = request.get("startDate");

    //           LocalDateTime startDateFormatted =     LocalDateTime.parse(startDate, formatter);
    @PostMapping("/stopTimer")
    public ResponseEntity<?> stopTimer(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        String endDateString = request.get("endDate");
        String startDateString = request.get("startDate");
        String levelString = request.get("level");
        int level = Integer.parseInt(levelString);
        String gameIdString = request.get("gameId");
        int gameId = Integer.parseInt(gameIdString);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy, HH:mm:ss");
        LocalDateTime endDate = LocalDateTime.parse(endDateString, formatter);
        LocalDateTime startDate = LocalDateTime.parse(startDateString, formatter);

        service.save(new CurrentGame(gameId,level,userId,startDate,endDate));

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/validateKey/{level}")
    public ResponseEntity<Object> validateKey(@RequestBody String key,
                                              @PathVariable int level) {
        String realKey = service.getKeyById(level);
        String message;
        String nextLevelLink;

        if (key.equals(realKey)) {
            nextLevelLink = getNextLevelLink(level);
            message = "Congrats! Click here to go to the next level";
        }else {
            message = "Invalid key";
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok().body(
                Map.of("message", message, "nextLevelLink", nextLevelLink)
        );
    }



//    private String getCorrectKey(int currentLevel){
//        if(currentLevel == 1) {
//            service.getKeyById(currentLevel)
//        } else if (currentLevel == 2) {
//            String
//
//        }
//    }
    private String getNextLevelLink(int currentLevel) {
        if (currentLevel == 1) {
            return "/level2";
        } else if (currentLevel == 2) {
            return "/last";
        }
            return "";

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
        String keyLevel2 = "eyJhbGciOiJIUzI1NiJ9.eyJLRVkiOiJoZWxsbzEyMyJ9.3fmMOp1-ceBMO6nStPDyByVp49YVtvIhySPrZWit97U";

        if (level == 1) {
            return ResponseEntity.ok(service.getKeyById(level));

        } else if (level == 2) {
            message = "oops! maybe you should look elsewhere";

        } else {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .header("THIS-MIGHT-BE-THE-KEY-BUT-YOU-HAVE-TO-UNCODE-IT", keyLevel2)
                .body(message);
    }

    private int calculateFirstHintId(int level) {
        int levelAdjust = level - 1;
        int hintsForLevel = 2;

        int firstHintId = levelAdjust * hintsForLevel + 1;

        return firstHintId;
    }
}


