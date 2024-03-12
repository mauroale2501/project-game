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

    @GetMapping( "/hints")
    public ResponseEntity<String> getHintById() {
        return ResponseEntity.ok(service.getHint());
    }

    @GetMapping("/keyLevel1")
    public ResponseEntity<String> getKeyLevel1(){
        return ResponseEntity.ok(service.getKey());
    }
}

