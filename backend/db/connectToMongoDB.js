import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://phritik06:zfXJ65SNiZoXhayt@eccom.zqrt7ny.mongodb.net/nextjs?retryWrites=true&w=majority");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
