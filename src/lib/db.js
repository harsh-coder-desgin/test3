const { username, password} = process.env;

export const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.9r4xr.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
