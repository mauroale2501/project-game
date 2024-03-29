package org.project.servergame;

import org.project.servergame.tables.Hint;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHintRepository extends CrudRepository<Hint, String> {

    @Query(value = "SELECT h.hint_string FROM hints h WHERE h.hint_id = ?1", nativeQuery = true)
    String findHintStringByLevel(int hintId);


}
