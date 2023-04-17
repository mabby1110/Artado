import styled from '@emotion/styled';
export const ProjectSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .tabsBox {
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    border: none;
    outline: none;
  }
  
  /* Style the buttons inside the tab */
  .tabsBox button {
    background-color: #f1f1f1;
    width: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
  }
  
  /* Change background color of buttons on hover */
  .tabsBox button:hover {
    background-color: #ddd;
  }
  
  /* Create an active/current tablink class */
  .tabsBox button.active {
    background-color: var(--principal);
    color:white;
  }
  
  /* Style the tab content */
  .tabcontent {
    display: none;
  }
`;