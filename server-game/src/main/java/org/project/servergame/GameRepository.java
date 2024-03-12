package org.project.servergame;

import org.project.servergame.tables.Hint;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class GameRepository {

    IGameRepository repo;
    List<String> hintsLevel1 = new ArrayList<>();

    public GameRepository() {
        hintsLevel1.add("first hint from backend");
        hintsLevel1.add("second hint");
        hintsLevel1.add("third hint");
    }
    public List<String> getHintsLevel1() {
        return hintsLevel1;
    }
}


//    public void setHintsLevel1(ArrayList<String> hintsLevel1) {
//        this.hintsLevel1 = hintsLevel1;
//    }


//    private final Map<UUID, Hint> hints;
//
//    {
//        hints = new HashMap<>();
//
//        UUID[] ids = {
////                int(1),
////        int(2),
////        int(3),
////        int(4),
//                UUID.fromString("2f81a686-7531-11e8-86e5-f0d5bf731f68"),
//                UUID.fromString("f9ce325d-ed8c-4fad-899b-fc997ed199ad"),
//                UUID.fromString("b769d25a-86dc-4ec6-a022-dfa4112354f9"),
//                UUID.fromString("822dcf18-54eb-4394-8884-1c73addf25c7"),
//        };
//        hints.put(ids[0], new Hint(ids[0],"First Hint"));
//        hints.put(ids[1], new Hint(ids[1],"First Hint"));
//        hints.put(ids[2], new Hint(ids[2],"First Hint"));
//        hints.put(ids[3], new Hint(ids[3],"First Hint"));
////        presidents.put(ids[1], new President("Barack Obama", ids[1], "2009", "2017"));
////        presidents.put(ids[2], new President("Donald J. Trump", ids[2], "2017", "2021"));
////        presidents.put(ids[3], new President("Joe Biden", ids[3], "2021", "2023"));
//    }
//    public Hint getById(String hint) {
//        if (hints.get(UUID.fromString(hint)) == null) {
//            throw new NoSuchElementException();
//        }
//        return hints.get(UUID.fromString(hint));
//    }

