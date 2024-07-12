.spinner-container {
  height: 100vh;
  display: grid;
  place-items: center;
}

.tab-container {
  overflow-y: auto;
  box-shadow: 0px 10px 10px -15px #111;
  display: flex;
  flex-direction: row;
  justify-content: start;
 
}

.each-tab-item {
  display: flex;
  flex-direction: row;
  justify-content: start;

  list-style-type: none;
  flex-shrink: 0;
  flex-grow: 1;
  padding: 15px 0px;
  text-align: center;
  cursor: pointer;
}

.active-tab-item {
  color: #ff6347;
  border-bottom: 2px solid #ff6347;
  font-weight: 600;
}

.tab-category-button {
  color: inherit;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.dishes-list-container {
  list-style-type: none;
  padding: 25px;
}
