// @ts-ignore
import StaticFileHandler from "serverless-aws-static-file-handler";
import path from "path";
import { Handler as AWSHandler } from "aws-lambda";

const clientFilesPath = path.join(__dirname, "../../assets/fonts/");
const fileHandler = new StaticFileHandler(clientFilesPath);

const handler: AWSHandler = async (event, context) => {
  return fileHandler.get(event, context);
};

export default handler;
