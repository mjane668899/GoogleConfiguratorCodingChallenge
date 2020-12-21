import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { Container } from '../components';


export function KeywordBoard () {
  const [keyword, setKeyword] = useState("");
  const [newKeyword, setNewKeyword] = useState("")
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
  const updateKeyword = (id) => {
    Axios.put('http://localhost:8000/updatekeyword', { keyword: keyword, id: id}).then(
      (response) => {
        setKeywordList(
          keywordList.map((val) => {
            return val.id === id
            ? {
              id: val.id,
              keyword: newKeyword,
            }
            : val;
          })
        );
      }
    );
  };

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
    <Container.Emptygrid item>
      <Container.Title>Keywords</Container.Title>
      <Container.Paper>
        <Container.TextField onChange={(event) => {
            setKeyword(event.target.value);
          }}
          placeholder="Enter your keywords here">
        </Container.TextField>
        <Container.Button onClick={saveKeyword}>ADD</Container.Button>
        <Container.Button onClick={getKeyword}>SHOW</Container.Button>
        <div className="keyword">
          {keywordList.map((val, key) => {
            return (
              <div>
                {val.keyword}
                <Container.Button
                  onClick={() => {
                    deleteKeyword(val.id);
                  }}>
                  Clear
                </Container.Button>
              </div>
            );
          })}
        </div>
      </Container.Paper>
    </Container.Emptygrid>
    </>
  );
}
