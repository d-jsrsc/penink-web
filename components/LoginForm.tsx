import React from "react";
import axios, { AxiosError } from "axios";

export default function Form() {
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      const res = await axios.post("/api/user/login", {
        email: target.email.value.trim(),
        password: target.password.value.trim(),
      });

      console.log(res.data);
      const result = res.data;
      if (res.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      const err = error as AxiosError;
      const res = err.response;
      const msg = res?.data.message;
      alert(msg);
    }
  };

  return (
    <div className="container mt-5">
      <style jsx>{`
        .card {
          border: none;
          height: 320px;
        }

        .forms-inputs {
          position: relative;
        }

        .forms-inputs span {
          position: absolute;
          top: -18px;
          left: 10px;
          background-color: #fff;
          padding: 5px 10px;
          font-size: 15px;
        }

        .forms-inputs input {
          height: 50px;
          border: 2px solid #eee;
          width: 100%;
          padding: 0 10px;
        }

        .forms-inputs input:focus {
          box-shadow: none;
          outline: none;
          border: 2px solid #000;
        }

        .btn {
          height: 50px;
        }

        .success-data {
          display: flex;
          flex-direction: column;
        }

        .bxs-badge-check {
          font-size: 90px;
        }
      `}</style>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <form onSubmit={registerUser} className="form-data">
              <div className="forms-inputs mb-4">
                <span>邮箱</span>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                />
                <div className="invalid-feedback">
                  A valid email is required!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                <span>密码</span>
                <input id="password" name="password" type="password" required />
                <div className="invalid-feedback">
                  Password must be 8 character!
                </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-dark w-100">
                  登录
                </button>
              </div>
            </form>
            {/* <div className="success-data">
              <div className="text-center d-flex flex-column">
                <i className="bx bxs-badge-check"></i>
                <span className="text-center fs-6">
                  You have been logged in Successfully
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
    var app = new Vue({
      el: '#form1',
      data: function () {
      return {
      email : "",
      emailBlured : false,
      valid : false,
      submitted : false,
      password:"",
      passwordBlured:false
      }
      },
      
      methods:{
      
      validate : function(){
      this.emailBlured = true;
      this.passwordBlured = true;
      if( this.validEmail(this.email) && this.validPassword(this.password)){
      this.valid = true;
      }
      },
      
      validEmail : function(email) {
      
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if(re.test(email.toLowerCase())){
      return true;
      }
      
      },
      
      validPassword : function(password) {
      if (password.length > 7) {
      return true;
      }
      },
      
      submit : function(){
      this.validate();
      if(this.valid){
      this.submitted = true;
      }
      }
      }
      });*/
