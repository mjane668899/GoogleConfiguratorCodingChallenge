import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Styling } from '../components';
import keywordData from "../pre-populate/keyword.json";


export function KeywordBoard () {
  const [keyword, setKeyword] = useState("");
  // const [newKeyword, setNewKeyword] = useState("")
  const [keywordList, setKeywordList] = useState([]);
  const saveKeyword = () => {
    Axios.post('http://localhost:8000/createkeyword', {
      keyword: keyword,
    }).then(() => {
      setKeywordList([
        ...keywordList,
        {
          keyword: keyword,
        },
      ]);
    });
  };

  const getKeyword = () => {
    Axios.get('http://localhost:8000/showkeyword').then((response) => {
      setKeywordList(response.data);
    });
  };


  // FOR UPDATE KEYWORD FUNCTION
  // const updateKeyword = (id) => {
  //   Axios.put('http://localhost:8000/updatekeyword', { keyword: keyword, id: id}).then(
  //     (response) => {
  //       setKeywordList(
  //         keywordList.map((val) => {
  //           return val.id === id
  //           ? {
  //             id: val.id,
  //             keyword: newKeyword,
  //           }
  //           : val;
  //         })
  //       );
  //     }
  //   );
  // };

  const deleteKeyword = (id) => {
    Axios.delete(`http://localhost:8000/deletekeyword/${id}`).then((response) => {
      setKeywordList(
        keywordList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
    <>
    <Styling.Emptygrid item>
      <Styling.Title>Keywords</Styling.Title>
      <Styling.Paper>
        <Styling.TextField onChange={(event) => {
            setKeyword(event.target.value);
          }}
          placeholder="Enter your keywords here">
        </Styling.TextField>
        <Styling.Button onClick={saveKeyword}>ADD</Styling.Button>
        <Styling.Button onClick={getKeyword}>SHOW</Styling.Button>
        <Styling.Box>
          {keywordData.map(item =>
            <Styling.List>
              <Styling.ListItemtext>
                <div key={item.id}>
                  <div>{item.keyword}</div>
                  <Styling.ListItemSecondaryAction>
                    <Styling.DeleteButton onClick/>
                  </Styling.ListItemSecondaryAction>
                </div>
              </Styling.ListItemtext>
            </Styling.List>
          )}
          {keywordList.map((val, key) => {
            return (
              <Styling.List>
                <Styling.ListItemtext>
                  <div>
                    <div>{val.keyword}</div>
                    <Styling.ListItemSecondaryAction>
                      <Styling.DeleteButton onClick={() => {
                          deleteKeyword(val.id);
                        }}/>
                      </Styling.ListItemSecondaryAction>
                    </div>
                  </Styling.ListItemtext>
                </Styling.List>
              );
            })}
          </Styling.Box>
        </Styling.Paper>
      </Styling.Emptygrid>
      </>
  );
}
