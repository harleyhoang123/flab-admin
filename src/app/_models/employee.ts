export interface Employee {
  id : number,
  Key:string,
  Value:string,
  "Created By":string,
  "Created Date":string,
  "Last Modified By":string,
  "Last Modified Date":string,
  project: Project
}

export interface Project{
  name:string,
  id:number
}
