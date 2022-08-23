-- table tasks
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title varchar(2200) NOT NULL,
    description varchar(300),
    done BOOLEAN NOT NULL default 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

