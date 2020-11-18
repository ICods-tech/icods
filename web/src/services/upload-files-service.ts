import api from './api';

class UploadFilesService {
  upload(file: any, onUploadProgress: any) {
    let formData = new FormData();
    formData.append('file', file);

    return api.post('/upload', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return api.get("/files");
  }
}

export default new UploadFilesService();