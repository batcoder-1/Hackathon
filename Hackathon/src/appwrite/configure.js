import config from "./config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  account;
  database;
  storage;
// remember to fetch userid from account service and use it in user methods
  constructor() {
    this.client
      .setEndpoint(config.appwriteurl)
      .setProject(config.appwriteprojectid);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // ---------------- User Methods ----------------

  async createUser(userId, { Username, Bio, profileImageId, Followers , Following , Skills = [], College, University, ResumeId, Github }) {
    try {
      return await this.database.createDocument(
        config.appwritecollectionid,
        userId,
        {
          Username,
          Bio,
          profileImage: profileImageId,
          Resume: ResumeId,
          Followers,
          Following,
          Skills,
          College,
          University,
          Github
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId, { Username, Bio, profileImageId, Followers, Following, Skills, College, University, ResumeId, Github }) {
    try {
      return await this.database.updateDocument(
        config.appwritecollectionid,
        userId,
        {
          Username,
          Bio,
          profileImage: profileImageId,
          Resume: ResumeId,
          Followers,
          Following,
          Skills,
          College,
          University,
          Github
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId) {
    try {
      return await this.database.deleteDocument(
        config.appwritecollectionid,
        userId
      );
    } catch (error) {
      throw error;
    }
  }

  // ---------------- File Methods ----------------

  async uploadFile(bucketId, file) {
    try {
      return await this.storage.createFile(bucketId, ID.unique(), file);
    } catch (error) {
      throw error;
    }
  }

  async updateFile(bucketId, fileId, file) {
    try {
      return await this.storage.updateFile(bucketId, fileId, file);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(bucketId, fileId) {
    try {
      return await this.storage.deleteFile(bucketId, fileId);
    } catch (error) {
      throw error;
    }
  }

  async getFileUrl(bucketId, fileId) {
    try {
      return this.storage.getFileView(bucketId, fileId);
    } catch (error) {
      throw error;
    }
  }

  // ---------------- Convenience Methods ----------------

  async uploadResume(file) {
    try {
      return await this.uploadFile(config.appwritebucketidresume, file);
    } catch (error) {
      throw error;
    }
  }

  async uploadImage(file) {
    try {
      return await this.uploadFile(config.appwritebucketidimages, file);
    } catch (error) {
      throw error;
    }
  }

  async updateResume(fileId, file) {
    try {
      return await this.updateFile(config.appwritebucketidresume, fileId, file);
    } catch (error) {
      throw error;
    }
  }

  async updateImage(fileId, file) {
    try {
      return await this.updateFile(config.appwritebucketidimages, fileId, file);
    } catch (error) {
      throw error;
    }
  }

  async deleteResume(fileId) {
    try {
      return await this.deleteFile(config.appwritebucketidresume, fileId);
    } catch (error) {
      throw error;
    }
  }

  async deleteImage(fileId) {
    try {
      return await this.deleteFile(config.appwritebucketidimages, fileId);
    } catch (error) {
      throw error;
    }
  }

  async getResumeUrl(fileId) {
    try {
      return await this.getFileUrl(config.appwritebucketidresume, fileId);
    } catch (error) {
      throw error;
    }
  }

  async getImageUrl(fileId) {
    try {
      return await this.getFileUrl(config.appwritebucketidimages, fileId);
    } catch (error) {
      throw error;
    }
  }

  // ---------------- Current User ----------------

  async getCurrentUserProfile() {
    try {
      const user = await this.account.get();
      const profile = await this.database.getDocument(
        config.appwritecollectionid,
        user.$id
      );
      return { user, profile };
    } catch (error) {
      throw error;
    }
  }
}

const services = new Services();
export default services;
export { services };
