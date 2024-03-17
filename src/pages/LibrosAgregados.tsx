import React from "react";
import { libros } from '../Tools/Libros';
import type { Book } from "../Tools/interface";


export default function LibrosAgregados({ libros, EliminarLibro }: { libros: Book[], EliminarLibro: any }) {


    return (
        <div >
            <div className="mt-1 rounded">
                <div>
                    <div>
                        {libros.length === 0 &&
                            <div>
                                <main>
                                    <h1 className="text-bold"><i className="fa-regular fa-bookmark"></i>No has agregado ningun libro</h1>
                                </main>
                            </div>
                        }

                        {libros.length !== 0 &&
                            <div>
                                <main>
                                    <h1 className="text-bold"><i className="fa-solid fa-bookmark"></i>Libros Agregados</h1>
                                </main>
                            </div>
                        }

                        <div className="container">
                            <div className="row">
                                {libros.map((e, i) => {
                                    return (
                                        <div key={i} className="col-md-6 mb-5 mt-1">
                                            <div className="  border-4 h-96 border-blue-700  lg:flex">
                                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${e.cover}')` }} title="Woman holding a mug">
                                                </div>
                                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                                    <div className="mb-8">
                                                        <div className="text-gray-900 font-bold text-xl mb-2 w-96">{e.title}</div>
                                                        <p className="text-gray-700 text-base">{e.synopsis}</p>
                                                    </div>
                                                    <div className="text-sm">
                                                        <p className="text-gray-900 leading-none"><strong>Genero: </strong> {e.genre}</p>
                                                        <p className="text-gray-600"><strong>Estreno: </strong> {e.year}</p>
                                                    </div>
                                                    <div className="flex items-center">

                                                        <button onClick={() => { EliminarLibro(e) }}
                                                            className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                className="h-5 w-5 mr-2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    strokeWidth="2"
                                                                    strokeLinejoin="round"
                                                                    strokeLinecap="round"
                                                                ></path>
                                                            </svg>

                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}


/*
{libros.map((e, i) => (
                        <div key={i} className="col-md-3 mb-5 mt-4">
                            <div className="w-70 h-full bg-gray-800  rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">

                                <div className="">
                                    <img src={e.book.cover} alt="Book Cover" />
                                </div>
                                <p className="font-extrabold">{e.book.title}</p>
                                <div className="sinopsis overflow-y-auto h-64 ">
                                    <p className="">{e.book.synopsis}</p>
                                </div>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{e.book.genre}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Año: {e.book.year}</span>
                                <button
                                    title="Save"
                                    onClick={() => { AccionLibro(e.book) }}
                                    className={`cursor-pointer flex m-1 items-center fill-lime-400 ${!ExisteLibro(e.book) ? "bg-red-500 hover:bg-red-600 active:border active:border-red-400" : "bg-green-500 hover:bg-green-600 active:border active:border-green-400"} rounded-md duration-100 p-2`}
                                >
                                    <i className="fa-regular fa-bookmark"></i>
                                    <span className="text-sm font-bold pr-1">{ExisteLibro(e.book) ? "Guardar libro" : "Eliminar Libro"}</span>
                                </button>
                            </div>
                        </div>
                    ))}
 */


                    