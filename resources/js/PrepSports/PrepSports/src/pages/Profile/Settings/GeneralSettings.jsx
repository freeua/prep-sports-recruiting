import React from "react";

const GeneralSettings = () => {
  return (
    <div className="userOptions">
      <div className="formatTitle curve2200 splitBar">
        <h2>General</h2>
      </div>
      <div className="columnBlockInfo clearfix curve0022">
        <div className="sportsTableBlock sportsTableBlockClean">
          <table className="userTable curve0022">
            <tbody>
              <tr>
                <td className="name">
                  <p>Username:</p>
                </td>
                <td className="value">
                  <p>Nikita_333777</p>
                </td>
              </tr>
              <tr>
                <td className="name">
                  <p>Change Password To:</p>
                </td>
                <td className="value">
                  <p style={{ whiteSpace: "nowrap" }}>
                    <input
                      type="password"
                      name="newPassword"
                      defaultValue
                      className="tb"
                      onchange="__passwordChange()"
                    />
                  </p>
                </td>
              </tr>
              <tr>
                <td className="name">
                  <p>Retype New Password:</p>
                </td>
                <td className="value">
                  <p>
                    <input
                      type="password"
                      name="retypePassword"
                      defaultValue
                      className="tb"
                      onchange="__passwordChange()"
                    />
                  </p>
                </td>
              </tr>

              <tr>
                <td className="name">
                  <p>Country:</p>
                </td>
                <td className="value">
                  <p>Ukraine</p>
                </td>
              </tr>

              <tr>
                <td className="name">
                  <p>Email:</p>
                </td>
                <td className="value">
                  <p>test@test.com</p>
                </td>
              </tr>

              <tr>
                <td className="name">Avatar:</td>
                <td className="value">
                  <div
                    style={{
                      float: "left",
                      paddingTop: 8
                    }}
                  >
                    <img
                      src="https://img.fantrax.com/graphics/blankAvtr.png"
                      title="Avatar Upload"
                      alt="Avatar"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div
                    style={{
                      float: "left",
                      padding: "20px 0px 0px 10px"
                    }}
                  >
                    <input
                      type="file"
                      name="avatar"
                      onchange="__dataChanged()"
                    />
                    <br />
                    <span style={{ fontSize: 11 }}>
                      Max. image file size 5 MB
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="name">Member Since:</td>
                <td className="value" colSpan={2}>
                  May 4, 2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
