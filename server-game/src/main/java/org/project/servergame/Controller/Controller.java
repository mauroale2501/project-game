package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.project.servergame.tables.CurrentGame;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    private final GameService service;

    public Controller(GameService service) {
        this.service = service;
    }


//    @PostMapping("/level1")
//    public  ResponseEntity<?> refreshLevel1(@PathVariable String userId){
//     Optional<CurrentGame> existingGame = service.findGameByUserId(userId);
//        if (existingGame.isPresent()) {
//            return getResponseEntity(existingGame);
//        } else {
//            return null;
//        }
//    }

//    private ResponseEntity<?> getResponseEntity(Optional<CurrentGame> existingGame) {
//        CurrentGame game = existingGame.get();
//        int currentLevel = game.getLevelId();
//
//        int nextLevel = currentLevel + 1;
//        game.setLevelId(nextLevel);
//        LocalDateTime startDateNoFormatted = LocalDateTime.now();
//        LocalDateTime startDate = formatterDate(startDateNoFormatted);
//        game.setStartDate(startDate);
//        game.setEndDate(null);
//        service.save(game);
//        return ResponseEntity.ok(game);
//    }

    @PostMapping("/startTimer")
    public ResponseEntity<?> startTimer(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        int level = Integer.parseInt(request.get("level"));

        CurrentGame existingGame = service.findGameByUserIdAndLevel(userId, level);
        if (existingGame != null && existingGame.getEndDate() == null) {
            return ResponseEntity.ok("Game in progress");
        }
        if (level == 1){
            LocalDateTime startDateNoFormatted = LocalDateTime.now();
            LocalDateTime startDate = formatterDate(startDateNoFormatted);
            CurrentGame newGame = new CurrentGame();
            newGame.setLevelId(1);
            newGame.setSessionId(userId);
            newGame.setStartDate(startDate);
            CurrentGame savedGame = service.save(newGame);
            return ResponseEntity.ok(savedGame);
        }
        CurrentGame prevLevel = service.findGameByUserIdAndLevel(userId, level - 1 );
        if (prevLevel != null && prevLevel.getEndDate() != null) {
            LocalDateTime startDateNoFormatted = LocalDateTime.now();
            LocalDateTime startDate = formatterDate(startDateNoFormatted);
            CurrentGame newGame = new CurrentGame();
            newGame.setLevelId(level);
            newGame.setSessionId(userId);
            newGame.setStartDate(startDate);
            CurrentGame savedGame = service.save(newGame);
            return ResponseEntity.ok(savedGame);
        }
        return ResponseEntity.ok(Collections.singletonMap("message", "not finished level"));

    }


    @PostMapping("/stopTimer")
    public ResponseEntity<String> stopTimer(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        int level = Integer.parseInt(request.get("level"));


//        Optional<CurrentGame> existingGame = service.findGameByUserId(userId);
//        int currentLevel = existingGame.get().getLevelId();
//        CurrentGame game = service.findGameByUserIdAndLevel(userId, currentLevel);
        CurrentGame game = service.findGameByUserIdAndLevelIdAndEndDate(userId, level);
        if (game.getLevelId() == level && game.getEndDate() == null) {

            LocalDateTime endDateNoFormatted = LocalDateTime.now();
            LocalDateTime endDate = formatterDate(endDateNoFormatted);
            game.setEndDate(endDate);
            service.save(game);
            return ResponseEntity.ok("Congrats!");
        } else {
            return ResponseEntity.ok("no game");
        }
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
        } else {
            message = "Invalid key";
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok().body(
                Map.of("message", message, "nextLevelLink", nextLevelLink)
        );
    }

    @GetMapping("/hints/{level}")
    public String getHintLevel(@PathVariable int level) {
        int startHint = calculateFirstHintId(level);

        String hint = service.getHintStringByLevel(startHint);
        service.incrementHintId(startHint);

        return hint;
    }

    @GetMapping("/currentGames")
    public ResponseEntity<List<CurrentGame>> getCurrentGames() {
        List<CurrentGame> currentGames = service.getAllCurrentGames();
        return ResponseEntity.ok(currentGames);
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


    public LocalDateTime formatterDate(LocalDateTime date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDate = date.format(formatter);
        LocalDateTime finalDate = LocalDateTime.parse(formattedDate, formatter);
        return finalDate;
    }

    private String getNextLevelLink(int currentLevel) {
        if (currentLevel == 1) {
            return "/level2";
        } else if (currentLevel == 2) {
            return "/last";
        }
        return "";
    }

}


