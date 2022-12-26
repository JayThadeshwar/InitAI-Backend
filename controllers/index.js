const { GetBlog, AddBlog, UpdateBlog, DeleteBlog, GetAllBlogs } = require('./Blog')
const { GetUser, AddUser, UpdateUser, DeleteUser, UserLogin, GetAllUsers } = require('./User')
const { AddImage, GetAllImageNames, FilteredImageNames } = require('./Image')
const { AddProject, DeleteProject, GetProject, UpdateProject, GetAllProjects } = require('./Project')
const { AddFile, GetAllFileNames, FilteredFileNames } = require('./File')
const { AddLecture, DeleteLecture, GetLecture, UpdateLecture, GetAllLectures } = require('./Lecture')

module.exports.GetBlog = GetBlog
module.exports.AddBlog = AddBlog
module.exports.UpdateBlog = UpdateBlog
module.exports.DeleteBlog = DeleteBlog
module.exports.GetAllBlogs = GetAllBlogs
module.exports.GetUser = GetUser
module.exports.AddUser = AddUser
module.exports.UpdateUser = UpdateUser
module.exports.DeleteUser = DeleteUser
module.exports.GetAllUsers = GetAllUsers
module.exports.UserLogin = UserLogin
module.exports.AddImage = AddImage
module.exports.GetAllImageNames = GetAllImageNames
module.exports.FilteredImageNames = FilteredImageNames
module.exports.GetProject = GetProject
module.exports.AddProject = AddProject
module.exports.UpdateProject = UpdateProject
module.exports.DeleteProject = DeleteProject
module.exports.GetAllProjects = GetAllProjects
module.exports.GetAllFileNames = GetAllFileNames
module.exports.AddFile = AddFile
module.exports.FilteredFileNames = FilteredFileNames
module.exports.GetLecture = GetLecture
module.exports.AddLecture = AddLecture
module.exports.UpdateLecture = UpdateLecture
module.exports.DeleteLecture = DeleteLecture
module.exports.GetAllLectures = GetAllLectures
