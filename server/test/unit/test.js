import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Q from 'q';
import sinon from 'sinon';
import controller from '../../controllers';
import model from '../../models';

chai.use(chaiAsPromised);
const expect = chai.expect;
const userController = controller.Users;
const userModel = model.User;
let req = {body:{username:'Kelvin'},}; 

describe('Unit test for the models ', () =>{
  describe('Test for the user model ', () =>{
    let fakePromise;
    before( (done)=>{
      fakePromise = Q.defer();
      sinon.stub(userModel, 'findOne').callsFake( ()=>{
        return fakePromise.promise;
      });
      done(); 
    });
    it('should be defined as a function', () =>{
      expect(userController.signup).to.be.a('function');
    }); //end of it test block
    it('should be defined as a function', () =>{
      expect(Q.isPromise(userController.signup(req))).to.be.true;
    }); //end of it test block
    it('should call findOne', () =>{
      userController.signup(req);
      expect(userModel.findOne.called).to.be.true;
    }); //end of it test block
    it.only('should resolve with a username', (done) =>{
      sinon.stub(userModel, 'findOne').callsFake( ()=>{
        fakePromise = Q.defer().promise;
        return fakePromise.resolve('hello again from the stub');
      });
      userController.signup(req).then((result) =>{
        expect(result).to.be.a('string');
        done();
      });
    }); //end of it test block
  }); //end of first inner test suite
}); //end of main test suite
