from mysqlconnection import connectToMySQL

class User:
    def __init__(self,data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        
    def full_name(self):
            return f"{self.first_name} {self.last_name}"

        def email_info(self):
            return f"{self.email}"

        def createdat(self):
            return f"{self.created_at}"

        def updatedat(self):
            return f"{self.updated_at}"
        


    @classmethod
    def insert_user(cls,data):
        query = "INSERT INTO users (first_name,last_name,email) VALUES (%(first_name)s,%(last_name)s,%(email)s)"
        return connectToMySQL("users_schema").query_db(query,data)

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users ORDER BY id DESC"
        db_users = connectToMySQL("users_schema").query_db(query)
        users = []

        for u in db_users:
            users.append(cls(u))

        return users


    @classmethod
    def get_user(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        user = connectToMySQL("users_schema").query_db(query,data)
        return cls(user[0])

    @classmethod
    def update_user(cls,data):
        query = "UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s WHERE id = %(id)s"
        return connectToMySQL("users_schema").query_db(query,data)


        
    @classmethod
    def delete_user(cls,data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL("users_schema").query_db(query,data)
