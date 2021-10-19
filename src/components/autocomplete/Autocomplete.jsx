import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Downshift from "downshift";
import Arrow from "../icons/arrow";
import actions from "../../constants/actions";
// import CityJSON from "../../mocks/cities.json";
import "../../styles/global.scss";
import "../styles/Autocomplete.css";

const Autocomplete = ({ handleSelect, labelTarget }) => {
  const dispatch = useDispatch();
  const citiesList = useSelector(
    (state) => state.flightSearch.getCitiesList?.cities
  );
  useEffect(() => {
    dispatch({
      type: actions.GET_FETCH_CITIES,
    });
  }, []);
  // ? Mock
  // const cities = [...CityJSON];
  const itemToString = (item) => (item ? item.name : "");

  const stateReducer = (state, changes) => {
    const { inputValue } = changes;
    if (changes.type === Downshift.stateChangeTypes.blurButton) {
      return { ...changes, isOpen: true };
    }
    handleSelect(inputValue);
    return changes;
  };

  return (
    <div>
      <Downshift stateReducer={stateReducer} itemToString={itemToString}>
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          getItemProps,
          getToggleButtonProps,
          clearSelection,
          highlightedIndex,
          selectedItem,
          isOpen,
        }) => (
          <div className="select-container">
            <label style={{ display: "block" }} {...getLabelProps()}>
              {labelTarget}
            </label>
            <input {...getInputProps()} className="form-control" />
            <button
              {...getToggleButtonProps()}
              className="toggle-button-select"
            >
              {isOpen ? (
                <Arrow classes="arrowUp" />
              ) : (
                <Arrow classes="arrowDown" />
              )}
            </button>
            {selectedItem ? (
              <button
                className="close-button toggle-button-select"
                onClick={clearSelection}
              >
                x
              </button>
            ) : null}
            <ul
              {...getMenuProps({
                style: {
                  overflowY: "scroll",
                  width: "100%",
                  paddingLeft: "24px",
                  marginTop: "5px",
                },
              })}
            >
              {isOpen
                ? citiesList.map((item, index) => (
                    <li
                      {...getItemProps({
                        item,
                        key: item.id,
                        style: {
                          backgroundColor:
                            index === highlightedIndex
                              ? "cornflowerblue"
                              : null,
                          color: index === highlightedIndex ? "white" : null,
                        },
                      })}
                    >
                      {item.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default Autocomplete;
