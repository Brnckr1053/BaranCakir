from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninja


class Dojo:

    def __init__(self,data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"

        getall = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        dojos = []

        for d in getall:
            dojos.append(cls(d))
            
        return dojos

    @classmethod
    def insert_dojos(cls,data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"

        insertdojo = connectToMySQL("dojos_and_ninjas_schema").query_db(query,data)

        return insertdojo

    @classmethod
    def show_ninja(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        show_ninja_in_dojo = connectToMySQL("dojos_and_ninjas_schema").query_db(query,data)
        print(show_ninja_in_dojo)
        dojo = cls(show_ninja_in_dojo[0])
        for n in show_ninja_in_dojo:
            d = {
                "id": n["ninjas.id"],
                "first_name": n["first_name"],
                "last_name": n["last_name"],
                "age": n["age"],
                "created_at": n["ninjas.created_at"],
                "updated_at": n["ninjas.updated_at"],
            }
            dojo.ninjas.append(Ninja(d))
        return dojo
    