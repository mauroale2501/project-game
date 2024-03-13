package org.project.servergame;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GameService {
    GameRepository repo;

    public GameService (GameRepository repo) {
        this.repo = repo;
    }

    public String getHintStringLevel1(int lastHintId) {
        Optional<String> hintStringOptional = repo.findRandomHintString(lastHintId);
        return hintStringOptional.orElse("No hint available");
    }

//    public String getHintStringLevel2(int lastHintId) {
//        Optional<String> hintStringOptional = repo.findRandomHintString(lastHintId);
//        return hintStringOptional.orElse("No hint available");
//    }

    public String getHint() {
        return repo.getHintsLevel1().getFirst();
    }
    public String getKey(){
        return repo.getKeyLevel1();
    }



}


//    public void halfTime() {
//        remainingTime /= 2;
//    }
//

