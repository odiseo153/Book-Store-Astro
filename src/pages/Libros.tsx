import React from "react";
import { libros } from "../Tools/Libros";
import type { LibraryItem, Book } from "../Tools/interface";
import LibrosAgregados from "./LibrosAgregados";


  
export default function ListaDeLibros() {
    const [librosList, setLibrosList] = React.useState<LibraryItem[]>(libros.library);
    const [titulo, setTitulo] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [verLibros, setVerLibros] = React.useState(false);
    const [librosAgregado, setLibrosAgregados] = React.useState<Book[]>([]);



    const librosFiltrados = (): LibraryItem[] => {
        let libros = librosList;
        let libros_Add = librosAgregado;

        if (categoria !== "") {
            libros = libros.filter(x => x.book.genre.toLocaleLowerCase().includes(categoria.toLocaleLowerCase()));
        }

        if (titulo !== "") {
            libros = libros.filter(x => x.book.title.toLocaleLowerCase().includes(titulo.toLocaleLowerCase()));
        }


        if (categoria !== "" && verLibros) {
            libros_Add = libros_Add.filter(x => x.genre.toLocaleLowerCase().includes(categoria.toLocaleLowerCase()));
        }

        if (titulo !== "" && verLibros) {
            libros_Add = libros_Add.filter(x => x.title.toLocaleLowerCase().includes(titulo.toLocaleLowerCase()));
        }

        return libros;
    }

    const librosFiltrados_Agregados = (): Book[] => {
        let libros_Add = librosAgregado;

        if (categoria !== "" && verLibros) {
            libros_Add = libros_Add.filter(x => x.genre.toLocaleLowerCase().includes(categoria.toLocaleLowerCase()));
        }

        if (titulo !== "" && verLibros) {
            libros_Add = libros_Add.filter(x => x.title.toLocaleLowerCase().includes(titulo.toLocaleLowerCase()));
        }

        return libros_Add;
    }

    const Agregar_A_Carrito = (libro: Book) => {
        const libroExiste = librosAgregado.find(x => x == libro)

        if (libroExiste == null) {
            setLibrosAgregados([...librosAgregado, libro])
        }
    }

    const AccionLibro = (libro: Book) => {
        if (ExisteLibro(libro)) {
            Agregar_A_Carrito(libro);
        }
        else {
            const librosActualizados = librosAgregado.filter(x => x !== libro); // Filtra el libro que se eliminará del carrito
            setLibrosAgregados(librosActualizados); // Actualiza el estado de librosAgregado

        }
    }

    const ExisteLibro = (libro: Book): boolean => {
        const libroExiste = librosAgregado.find(x => x == libro)

        if (libroExiste == null) {
            return true;
        }

        return false;
    }


    return (
        <div>

            <div className="flex ">

                <select id="countries" onChange={(e) => setCategoria(e.target.value)} className="bg-gray-50 m-3 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" className="text-white">Todos : </option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Terror">Terror</option>
                </select>

                <input type='text' className='form-control border-black mt-3 w-96' placeholder="Buscador De Libros" onChange={(e) => setTitulo(e.target.value)} />

            </div>


            <div className="input mt-2 flex flex-col w-auto bg-gray-800 justify-center rounded-md">

                <button className="value flex items-center gap-5 px-10 py-10 text-white relative cursor-pointer rounded-md transition-colors duration-300 focus:outline-none focus:bg-gray-900 hover:bg-gray-700 focus-visible:bg-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500"
                    onClick={() => setVerLibros(false)}>
                    <i className="fa-solid fa-book"></i>
                    Libros
                </button>

                <button className="value  flex items-center gap-5 px-10 py-10 text-white relative cursor-pointer rounded-md transition-colors duration-300 focus:outline-none focus:bg-gray-900 hover:bg-gray-700 focus-visible:bg-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500" onClick={() => setVerLibros(true)} >
                    <i className="fa-solid fa-book-bookmark"></i>
                    Lista De Favoritos
                </button>

            </div>


            <div className={verLibros ? "w-full h-auto " : " hidden"}>
                <LibrosAgregados libros={librosFiltrados_Agregados()} EliminarLibro={AccionLibro} />
            </div>


            <div className={verLibros ? "hidden" : "container"}>
                <div className="row">
                    {librosFiltrados().map((e, i) => (
                        <div key={i} className="1 col-md-6 mb-5 mt-4">
                            <div className="  border-4 h-96 border-blue-700  lg:flex h-full">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${e.book.cover}')` }} title="Woman holding a mug">
                                </div>
                                <div className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2 w-96">{e.book.title}</div>
                                        <p className="text-gray-700 text-base">{e.book.synopsis}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <p className="text-gray-900 leading-none">{e.book.genre}</p>
                                            <p className="text-gray-600">Estreno: {e.book.year}</p>
                                        </div>

                                        <button
                                            title="Save"
                                            onClick={() => { AccionLibro(e.book) }}
                                            className="relative left-10">

                                            <span >
                                                {ExisteLibro(e.book) ? <i className="fa-solid fa-heart-circle-plus"></i> : 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f02832" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-off">
                                                    <line x1="2" y1="2" x2="22" y2="22" />
                                                    <path d="M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" />
                                                    <path d="M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17" />
                                                    </svg>
                                                    }
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>




                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}

