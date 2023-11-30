import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    console.log(import.meta.env);
    console.log(conf.appwriteUrl);
    console.log(conf.appwriteProjectId);
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        console.log("new acc done");
        // - uncomman for auto login
        // return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js:30 ~ AuthService ~ createAccount ~ error:",
        error
      );
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js:42 ~ AuthService ~ login ~ error:",
        error
      );
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.js:47 ~ AuthService ~ getCurrentUser ~ error:",
        error
      );
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
