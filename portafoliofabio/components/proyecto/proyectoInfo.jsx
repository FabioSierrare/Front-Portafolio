export default function Proyecto({ info }) {
  const codigo = "Ver codigo </>";

  return (
    <div className="w-full">
      <div className="mt-5">
        <div className="flex">
          {/* Imagen */}
          <div className="w-1/3 h-[400px] mr-7">
            <img
              src={info.urlImagen}
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>

          {/* Información */}
          <div className="flex-1 mr-5 flex flex-col mt-4">
            <h3 className="text-3xl text-[#F2F2F2] mb-2 font-semibold">
              {info.titulo}
            </h3>

            <p className="text-prf text-xl font-light">{info.descripcion}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {info.tecnoinfo.map((t, index) => (
                <button
                  key={index}
                  className="bg-white rounded-2xl flex p-2 items-center text-sm w-fit"
                >
                  <img src={t.urlLogo} className="w-7 mr-2" />
                  {t.nombre}
                </button>
              ))}
            </div>

            {/* Botón abajo */}
            <div className="mt-auto">
              <a
                className="bg-white rounded-2xl flex p-2 w-40 items-center text-sm"
                href={info.urlGitHub}
              >
                <img src="..//icons/GitHub.png" className="w-8 mr-2" />
                {codigo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
