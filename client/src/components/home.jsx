
import React from 'react';

const HomePage = ()=>{
  return(
    <div>
      <div className="container-fluid" >
        <div className="row">
          <div className="col-xs-12 col-sm-3" id="listPane">
            <div id="userPic">
              <img alt="User's Image" src="./avatar1.jpg" className="img-circle"/>
            </div>
            <div className="list-group">
              <a className="list-group-item" href="#" data-toggle="modal" data-target="#createGroup">
                <span className="glyphicon glyphicon-plus"></span> Add Group <span className="badge">4</span></a>
              <a className="list-group-item" href="#" data-toggle="modal" data-target="#selectUser">
                <span className="glyphicon glyphicon-plus"></span> Add User<span className="badge">7</span></a>
            </div>
            <div id="createGroup" className="modal fade" role="dialog">
              <div className="modal-dialog modal-md">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">
                      close <span className="glyphicon glyphicon-remove"></span></button>
                    <h4 className="modal-title text-success text-center">Create a Group</h4>
                  </div>
                  <div className="modal-body">
                    <form role="form">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input className="form-control" type="text" placeholder="groupname"/>
                      </div>
                      <div className="input-group">
                        <span className="input-group-addon">Text</span>
                        <input className="form-control" type="text" placeholder="description"/>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary btn-block pull-left" data-dismiss="modal">Create</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="selectUser" className="modal fade" role="dialog">
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">
                        close <span className="glyphicon glyphicon-remove"></span></button>
                      <h4 className="modal-title text-success text-center">Add users to group</h4>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="listofgroups">Select a group:</label>
                        <select className="form-control" id="listofgroups">
                          <option>group 1</option>
                          <option>group 2</option>
                          <option>group 3</option>
                          <option>group 4</option>
                        </select>
                      </div>
                      <div className="checkbox">
                        <label><input type="checkbox" value=""/>user 1 from database</label>
                      </div>
                      <div className="checkbox">
                        <label><input type="checkbox" value=""/>user 2 from database</label>
                      </div>
                      <div className="checkbox">
                        <label><input type="checkbox" value=""/>user 3 from database</label>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary btn-block pull-left" data-dismiss="modal">Create</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5" id="pageContent" >
            <div id="selectbottom" >
              <div className="form-group">
                <label htmlFor="listofgroups" className="lead text-light">Select a group:</label>
                <select className="form-control" id="listofgroups">
                  <option>group 1</option>
                  <option>group 2</option>
                  <option>group 3</option>
                  <option>group 4</option>
                </select>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item">User 1</li>
              <li className="list-group-item">User 2</li>
              <li className="list-group-item">User 3</li>
              <li className="list-group-item">User 4</li>
            </ul>
          </div>
        </div>  
      </div>
    </div>
  );
};//end of stateless functional component creategroup

export default HomePage;