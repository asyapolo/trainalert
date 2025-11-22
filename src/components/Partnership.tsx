const Partnership = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Совместно с РЖД при помощи мобильного приложения мы решаем следующие тезисы:
          </p>
          <ul className="text-lg md:text-xl text-muted-foreground space-y-4 text-left max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="mr-3">·</span>
              <span>Снижение количества ЧП и смертности на путях, не связанных с переездами.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">·</span>
              <span>Создание инструмента для работы с социальной повесткой и демонстрации заботы о безопасности всех граждан.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">·</span>
              <span>Сбор и обработка данных о точках несанкционированного пересечения путей.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
