const headerUserNameElement = document.querySelector('.user');
// const userNameElement = document.querySelector('.user-name');
const userNameBtn = document.querySelector('#name'); // ->  <span id = "name">홍길동</span>
const localUserName = localStorage.getItem('userName');
const studentCode = document.querySelector('#student-code');
const localstudentCode = localStorage.getItem('inputStudentCode');
const studentEmail = document.querySelector('#student-email');
const localstudentEmail = localStorage.getItem('inputStudentEmail');


const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameBtn.textContent = name;
  // userNameBtn.textContent = name;
  // userNameElement.innerHTML = `<span id = 'name'>${name}</span> <span>님</span>`;
};

const setStudentCodeInnerHtml = (code) => {
  studentCode.textContent = code;
};

const setStudentEmailInnerHtml = (email) => {
  studentEmail.textContent = email;
};

// 로컬스토리지에 세팅하기
if (localUserName) {
  setUserNameInnerHtml(localUserName);
  // headerUserNameElement.innerHTML = `${localUserName} <span>님</span>`;
  // userNameElement.innerHTML = `${localUserName} <span>님</span>`;
}

if (localstudentCode) {
  setStudentCodeInnerHtml(localstudentCode);
}

if (localstudentEmail) {
  setStudentCodeInnerHtml(localstudentEmail);
}

userNameBtn.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
  // headerUserNameElement.innerHTML = `${localUserName} <span>님</span>`;
  // userNameElement.innerHTML = `${userName} <span>님</span>`;
};

studentCode.onclick = () => {
  const inputStudentCode = prompt('학번을 입력해 주세요');
  localStorage.setItem('inputStudentCode', inputStudentCode);

  setStudentCodeInnerHtml(inputStudentCode);
};

studentEmail.onclick = () => {
  const inputStudentEmail = prompt('학번을 입력해 주세요');
  localStorage.setItem('inputStudentEmail', inputStudentEmail);

  setStudentEmailInnerHtml(inputStudentEmail);
};
