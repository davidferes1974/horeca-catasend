import React from "react";

// Styles
import "./tailwind.output.css";
import "./tailwind.css";

import { Fragment, useState } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  EnvelopeIcon,
  TvIcon,
  FaceSmileIcon,
  StarIcon,
  ShareIcon,
  Bars3Icon,
  RocketLaunchIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const posts = [
  {
    title: 'Presenta menús en tiempo real.',
    category: { name: 'Cocina de mercado'},
    description:
      'Añade una experiencia única a tus clientes. informa de una manera visual y profesional de las características de las ofertas gastronómicas como son los alérgenos, ingredientes y otras especificaciones que harán una experiencia más óptima para tu clientela.',
    imageUrl:
      'catering.jpg',
    author: {
      name: 'Solicita una demo',
      href: 'https://productos.catasend.com/demo-catasend',
      
    },
  },
  {
    title: 'Enseña tu oferta gastronómica de forma fácil y profesional.',
    category: { name: 'Sugerencias'},
    description:
      'La innovación y la cocina nacen al mismo tiempo, cuando decidimos usar la tecnología para mejorar aquello que se tiene que comer. Mejorar la realidad y transformarla.',
    imageUrl:
      'restaurante.webp',
    author: {
      name: 'Solicita una demo',
      href: 'https://productos.catasend.com/demo-catasend',
    },
  },
  {
    title: 'Mejora la experiencia de tus clientes.',
    category: { name: 'Menús cerrados'},
    description:
      'Añade una experiencia superior a los eventos privados y de empresa. Informa directamente de los menús cambiando en tiempo real según el momento del día. Buffet, cóctail, aperitivo, almuerzo, cenas, sugerencias según mercado, etc. Potencia tu oferta disponible en cada momento.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'Hoteles1.webp',   
    author: {
      name: 'Solicita una demo',
      href: 'https://productos.catasend.com/demo-catasend',
      
    },
  },
]


const faqs = [
  {
    question: "¿Cómo creo un producto nuevo?",
    answer:
      "Sólo tienes que subir una foto o sarla desde el móvil, añadir título y una descripción. Catasend generará una plantilla adaptada a tu texto e imagen.",
  },
  {
    question: "¿Cómo creo un catálogo?",
    answer:
      "Seleccionas los productos que quieres mostrar, un click en el botón -Exportar a Catálogo- y ya tienes un nuevo catálogo.",
  },
  {
    question: "¿Qué pasa con un catálogo caducado?",
    answer:
      "Deja de visualizarse automáticamente. Esta pensado para ofertas que tienen un tiempo determinado y asegurarte que no se visualicen una vez transcurrido el tiempo que decidas. También podrás desactivaslos manualmente y volverlos a activar dentro de la fecha que has puesto.",
  },
  {
    question: "¿Puedo cambiar productos en un catálogo activo?",
    answer:
      "Sí, puedes cambiar productos y los cambios se verán en tiempo real. Sabemos que los menús pueden variar rápidamente y lo podrás hacer a tu gusto y preferencias.",
  },

  {
    question: "¿Puedo hacer secciones dentro de un mismo catálogo?",
    answer:
      "Sí, puedes hacer secciones e incluso cambiar tipo de plantilla en un mismo catálogo para que se visualicen de forma diferente como por ejemplo primeros platos, sugerencias, postres, etc. ",
  },
  // More questions...
];

const features = [
  {
    name: "Comparte con tus clientes",
    description:
      "Estés donde estés podrás compartir tus menús, aperitivos, cócteles, etc. Por redes sociales y apps de mensajería.",
    icon: ShareIcon,
  },
  {
    name: "Elige tus platos favoritos",
    description:
      "Puedes quitar o pener platos de tus menús de una forma rápida y muy sencilla.",
    icon: StarIcon,
  },
  {
    name: "Cambios instantáneo",
    description:
      "Cualquier cambio que hagas (fotos, texto, platos, postres, etc) se verán en tiempo real en tus catálogos públicos.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Envía tus creaciones",
    description:
      "Podrás descargar tus menús para enviar por correo incluso acoplar a tus plantillas habituales.",
    icon: EnvelopeIcon,
  },
  {
    name: "Fácil de usar",
    description:
      "Sólo tendrás que añadir foto y descripción del producto. Cuentas con multitud de plantillas que harán que presentes tus propuestas de una forma profesional y elegante.",
    icon: FaceSmileIcon,
  },
  {
    name: "Enlaza con paltallas publicitarias",
    description:
      "Podrás visualizar tus ofertas gastronómicas en cualquier tipo de pantalla. Sólo necesitarás una conexión a internet y listo.",
    icon: TvIcon,
  },
  {
    name: "Seguridad",
    description:
      "Tú decides quien podrá ver tus productos o servicios y poner caducidad para el acceso e ellos.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integraciones",
    description:
      "Conecta con tus principales herramientas de gestión. Somos especialistas en integración de software.",
    icon: Squares2X2Icon,
  },
];

const resources = [
  {
    name: "Preguntas frecuentes",
    description:
      "¿Tienes preguntas sobre el manejo de la aplicación? ",
    href: "#faqs",
    icon: QuestionMarkCircleIcon,
  },

  {
    name: "Desarrollado por Galicloud",
    description: "¿Quieres saber más sobre nuestro equipo de desarrollo?",
    href: "https://www.galicloud.com/",
    icon: Squares2X2Icon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative">
      <div className="relative bg-gray-50">
        <Popover className="relative bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Catasend-Horeca</span>
                  <img
                    className="h-8 w-auto sm:h-8"
                    src="cataHorecaLogo.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <a
                  href="#precios"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Precios
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        )}
                      >
                        <span>Más</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src="cataHorecaLogo.jpg"
                        alt="Your Company"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8"></nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#precios"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Precios
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="lg:relative">
        <div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block">Sorprende a tus clientes </span>
                <span class="block text-teal-600 ">Innova potenciando tu negocio</span>
              </h1>
              <div className="mx-auto mt-5 max-w-md sm:flex pb-8 sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#precios"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-black md:py-4 md:px-10 md:text-lg"
                >
                  Empieza gratis
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#precios"
                  className="flex w-full items-center justify-center rounded-md border border-teal-600 bg-white px-8 py-3 text-base font-medium text-teal-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Solicita demo
                </a>
              </div>
            </div>
            </div>
            <div class="mx-auto mt-2 max-w-2xl px-2 sm:mt-4 sm:px-2"></div>
          </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-gradient-to-r from-gray-400 via-slate-100 to-gray-500" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
            <img
              className="relative rounded-lg shadow-lg"
              src="horecaP.webp"
              alt="App screenshot"
            />
          </div>
        </div>
          
          
        </main>
      </div>
      <div className="overflow-hidden bg-gray-50">
        <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                La mejor manera de
              </h2>
              <h2 className="text-3xl font-bold tracking-tight text-teal-600 sm:text-4xl">
                sorprender a los clientes
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-600 hover:text-teal-400 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative bg-gradient-to-r from-gray-400 via-slate-100 to-gray-500 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Desde el corazón del negocio</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Impulsa las ventas mejorando la experiencia de tus clientes.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-600">
                    <a>
                      {post.category.name}
                    </a>
                  </p>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline hover:text-teal-600" fill="none" viewBox="0 0 24 24">
                        {post.author.name}
                      </a>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
      </div>
     
      <div class="relative bg-white py-16 sm:py-4 lg:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-4">
            <img
              className="relative rounded-lg shadow-lg"
              src="coctail.webp"
              alt="App screenshot"
            />
          </div>
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h2 class="text-lg font-bold text-teal-600 pt-6">
            ¿Nuevo cóctel? 
          </h2>
          <h2 class="text-lg font-semibold text-teal-600">
            Un par de clicks y listo para ofertar.
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Desde donde quieras y cuando quieras
          </p>
         
          <div class="mt-12">
            <div class="">
              <div class="pt-6">
                <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center rounded-md bg-teal-500 p-3 shadow-lg">
                        <svg
                          class="h-10 w-10 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-7-5l3-3m0 0l3 3m-3-3v12"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-6 text-lg font-medium tracking-tight text-gray-900">
                      Rápido y dinámico
                    </h3>
                    <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Tecnología desarrollada en la nube para dar mayor rapidez de
            respuesta a los cambios. 
          </p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <div class="container my-4 mx-auto px-4 md:px-8">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a>
                <img class="block h-auto w-full" src="horeca2.webp" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="text-lg font-medium tracking-tight text-gray-900">
                    Crea tus prouestas
                  </a>
                </h1>
                <p class="text-grey-darker text-sm"></p>
              </header>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a>
                <img class="block h-auto w-full" src="horeca3.webp" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="text-lg font-medium tracking-tight text-gray-900">
                    Elige tu menú ideal
                  </a>
                </h1>
                <p class="text-grey-darker text-sm"></p>
              </header>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a>
                <img class="block h-auto w-full" src="horeca1.webp" />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="text-lg font-medium tracking-tight text-gray-900">
                    Muéstralo a tus clientes
                  </a>
                </h1>
                <p class="text-grey-darker text-sm"></p>
              </header>
            </article>
          </div>

          <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32 md:px-2">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                    Cambia las ofertas en tiempo real
                  </span>
                  <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    <span className="block text-gray-900">Menús dinámicos</span>
                    <span className="block text-teal-600">
                      Gastronomía viva
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Menús de temporada, nuevos productos o nuevas tendencias que
                  actualizarás de forma rápida para mostrar a tus clientes y
                  potenciar tu negocio.
                </p>
              </div>
              <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img className="w-full" src="horeca4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="mx-auto mt-2 max-w-2xl px-2 sm:mt-12 sm:px-2"></div>
            <div id="precios" class="bg-gray-100">
              <div class="pt-12 sm:pt-16 lg:pt-20">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div class="text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-teal-600 sm:text-4xl lg:text-5xl">
                      Impulsa tus ventas
                    </h2>
                    <p class="mt-4 text-xl text-gray-600">
                      Prueba 15 días grátis sin compromiso ni registro de
                      tarjeta.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                <div class="relative">
                  <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
                  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                      <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 class="text-2xl font-bold text-teal-600 sm:text-3xl sm:tracking-tight">
                          Sistema de pago mensual
                        </h3>
                        <p class="mt-6 text-base text-gray-500">
                          Podrás darte de baja cuando quieras y volver a darte
                          de alta cuando lo necesites.
                        </p>
                        <div class="mt-8">
                          <div class="flex items-center">
                            <h4 class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-teal-600">
                              ¿Qué incluye?
                            </h4>
                            <div class="flex-1 border-t-2 border-gray-200"></div>
                          </div>
                          <ul
                            role="list"
                            class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                          >
                            <li class="flex items-start lg:col-span-1">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-5 w-5 text-teal-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-sm text-gray-700">
                                Base de datos personal de tus productos.
                              </p>
                            </li>

                            <li class="flex items-start lg:col-span-1">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-5 w-5 text-teal-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-sm text-gray-700">
                                Más de 20 plantillas disponibles.{" "}
                              </p>
                            </li>

                            <li class="flex items-start lg:col-span-1">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-5 w-5 text-teal-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-sm text-gray-700">
                                Hasta 20 catálogos activos.
                              </p>
                            </li>

                            <li class="flex items-start lg:col-span-1">
                              <div class="flex-shrink-0">
                                <svg
                                  class="h-5 w-5 text-teal-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p class="ml-3 text-sm text-gray-700">
                                Atención al cliente por e-mail
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                        <p class="text-lg font-medium leading-6 text-gray-900">
                          Tarifa Inicio
                        </p>
                        <div class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-teal-600">
                          <span>49€</span>
                          <span class="ml-3 text-xl font-medium tracking-normal text-teal-600">
                            mes
                          </span>
                        </div>

                        <div class="mt-6">
                          <div class="">
                          <a href="https://productos.catasend.com/demo-catasend" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-teal-600 hover:ring-teal-500">
  <div class="flex items-center">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
    <h3 class="block h-auto w-full font-bold group-hover:text-white ">
                Solicita una demo
              </h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Hecemos una demo y luego tendrás 15 días de prueba sin ningún compromiso.</p>
</a>
                          </div>
                        </div>
                        <div class="mt-4 text-sm">
                          <a class="font-medium text-gray-900">
                            Tarifas personalizadas
                            <span class="font-normal text-gray-500">
                              (Consultar)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:py-6 sm:px-6 lg:px-8">
          <div id="faqs" className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <div class="flex flex-col items-center">
              <a>
                <img class="block h-auto w-full" src="faqsGreen.jpg" alt="faqs" />
              </a>
              <h2 class="flex-shrink-0  pr-4 text-2xl font-semibold text-black">
                Preguntas frecuentes
              </h2>
              <div class="flex-1 border-t-2 border-gray-200"></div>
            </div>

            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-black">
              Personalizable 100%
            </h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-teal-600 sm:text-5xl lg:text-6xl">
              Una solución para cada tipo de negocio.
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Contacta con nuestros asesores para descubrir la mejor
              opción para tu negocio.
            </p>
          </div>
        </div>
        
          <div className="relative">
          <div className="absolute inset-0 flex flex-col " aria-hidden="true">
            <div className="flex-1 " />
            <div className="w-full flex-1 bg-gradient-to-r from-gray-400 via-slate-100 to-gray-500 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
            <img
              className="relative"
              src="horeca9a.webp"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
      
      <div>      
        <footer class="bg-black pt-8">
          <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
              <a
                href="https://www.facebook.com/catasend"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="mailto:davidfernandez@catasend.com"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Email</span>
                <svg
                  class="h-8 w-8 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                  <line x1="3" y1="19" x2="9" y2="13" />{" "}
                  <line x1="15" y1="13" x2="21" y2="19" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCgG4PnzwKsGf76Ld-87B25g"
                class="text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Youtube</span>
                <svg
                  class="h-8 w-8 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>

            <div class="mt-8 md:order-1 md:mt-0">
              <p class="text-center text-base text-gray-400">
                &copy; 2022 Catasend, un producto de Galicloud.
              </p>
            </div>
          </div>
        </footer>
        
      </div>

      
      <a href="https://chatwith.io/es/s/6319a90f4570c" style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius: "35px", backgroundColor: "#25D366", color: "#fff", textDecoration: "none", fontFamily: "sans-serif", fontSize: "16px", width:"60px", height:"60px",position: "fixed",right: "15px",bottom: "15px"}}>
      <svg style={{verticalAlign: "middle",transform: "translateX(1px)"}} width="35" height="35" fill="white" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                    </svg>
                                </a>
                            
                             
                            

    </div>
  );
}


