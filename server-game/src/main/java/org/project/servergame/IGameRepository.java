package org.project.servergame;

import org.project.servergame.tables.Hint;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface IGameRepository extends CrudRepository<Hint,String> {
    @Query(value = "SELECT h.hint_string FROM hints h WHERE h.hint_id = (SELECT MIN(hint_id) FROM hints WHERE hint_id > ?1)", nativeQuery = true)
    Optional<String> findRandomHintString(int lastHintId);
}
