package org.project.servergame;

import org.project.servergame.tables.Key;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IKeyRepository extends CrudRepository<Key, String> {

    @Query(value = "SELECT k.key_string FROM keys k WHERE k.key_id = ?1", nativeQuery = true)
    String findKeyById(int keyId);
}
