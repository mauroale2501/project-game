package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.project.servergame.tables.CurrentGame;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
    public String startTimer(@RequestBody Map<String, String> request) {
        System.out.println("userId = " + request);
        String userId = request.get("userId");
        String startDateString = request.get("startDate");


////        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSX");
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy, HH:mm:ss");
        LocalDateTime startDate = LocalDateTime.parse(startDateString, formatter);

        service.save(new CurrentGame(1,1,userId,startDate, null));
        return userId;
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


