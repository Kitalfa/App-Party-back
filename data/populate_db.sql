/* une fois les tables crées, on va les remplir */

INSERT INTO "list" ("name")
VALUES ('Première liste' );

INSERT INTO "card" ("title", "color", "list_id")
VALUES ('Carte 1', '#fff696', 1),
       ('2ème carte', '#c1e7ff', 1);

INSERT INTO "tag" ("name", "color")
VALUES ('Urgent', '#F00');

-- et on oublie pas la table de liaison !
INSERT INTO "card_has_tag" ("card_id", "tag_id")
VALUES (1,1);