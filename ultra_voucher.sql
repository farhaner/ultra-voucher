CREATE DATABASE ultra_voucher;

ALTER TABLE parent_name
    ADD id varchar PRIMARY KEY NULL 
    ADD name varchar NULL

INSERT INTO parent_name
(
 [id], 
 [name]
)
VALUES
( 
 1, Zaki
),
(
 2, Ilham
)
(
 3, Irwan
)
(
 4, Azka
)

ALTER TABLE child_name
    ADD id varchar NULL 
    ADD name varchar NULL
    ADD parent_id varchar FOREIGN KEY (parent_id) REFERENCES parent_id(id) NULL
VALUES
( 
 1, Zaki, 2
),
(
 2, Ilham, NULL
)
(
 3, Irwan, 2
)
(
 4, Azka, 3
)

SELECT * FROM 