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
  const NumberinputStudentCode = Number(inputStudentCode);

  if (isNaN(inputStudentCode)) {
    alert('숫자만 입력하여 주세요.');
    return false;
  }

  if (NumberinputStudentCode.length != 9) {
    alert('학번은 9자리를 입력하여 주새요.');
    return false;
  }
  localStorage.setItem('inputStudentCode', inputStudentCode);

  setStudentCodeInnerHtml(inputStudentCode);
};

studentEmail.onclick = () => {
  const inputStudentEmail = prompt('email을 입력해 주세요');
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  // 이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우

  if (exptext.test(inputStudentEmail)==false) {
    alert('이메일 형식이 올바르지 않습니다.');
    return false;
  }
  localStorage.setItem('inputStudentEmail', inputStudentEmail);

  setStudentEmailInnerHtml(inputStudentEmail);
};
