import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/template/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import FormList from '../../../components/FormList';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  // useEffect(() => {
  //   const URL = window.location.hostname.includes('localhost')
  //     ? 'https://localhost:8080/categorias'
  //     : 'https://devflixalura.herokuapp.com/categorias';
  //   fetch(URL)
  //     .then(async (resp) => {
  //       const resposta = await resp.json();
  //       setCategorias(resposta);
  //     });
  // }, []);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((resp) => {
        setCategorias(resp);
      });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          clearForm();
        }}
        >

          <FormField
            label="Nome da Categoria"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button as="button">
            Cadastrar
          </Button>
        </form>

        {
          categorias.length === 0
          && (
            <div>
              Loading...
            </div>
          )
        }

        <FormList values={categorias} />

        {/* <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria.titulo + index}`}>
              {categoria.titulo}
              {categoria.cor}
            </li>
          ))}
        </ul> */}
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
