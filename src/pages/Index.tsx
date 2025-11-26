import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [email, setEmail] = useState('');

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Пожалуйста, введите email');
      return;
    }
    toast.success('Спасибо за заказ! Ссылка на книгу отправлена на ' + email);
    setEmail('');
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 25, 15, 0.5), rgba(15, 25, 15, 0.7)), url(https://cdn.poehali.dev/projects/2c5b8e43-82a3-42eb-95c3-298537649bf2/files/c3eda584-f7de-448f-b303-187f47986340.jpg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in-slow">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Баня. Исконные традиции <br />для тела и духа
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Откройте дверь в мир, где пар лечит, веник говорит, а жар рождает заново. <br />
            Полное руководство от Андрея Равинских
          </p>
          <Button
            onClick={scrollToOrder}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg shadow-xl transition-all hover:scale-105"
          >
            Начать ритуал очищения <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
              Вы до сих пор думаете, что баня — это просто помыться и погреться?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Современный мир выхолостил душу из древней традиции. Мы превратили место силы в развлечение.
                  Эта книга вернет вас к истокам.
                </p>
                <p className="text-xl font-semibold mb-6 text-foreground">
                  Это — путь от простого мытья к осознанному ритуалу, который:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" className="text-accent mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">
                      <strong>Очищает не только тело, но и душу</strong> от накопленного стресса и негатива
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" className="text-accent mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">
                      <strong>Укрепляет здоровье</strong> через понимание физиологии и работу с целительными силами трав
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" className="text-accent mr-3 mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg">
                      <strong>Дает силу и знания</strong>, которые передавались из поколения в поколение
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/2c5b8e43-82a3-42eb-95c3-298537649bf2/files/cf220242-c504-4dad-9da3-c46841519e94.jpg"
                  alt="Банные принадлежности"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Погрузитесь в полную энциклопедию банного дела
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="Flame" className="mr-3 text-accent" size={24} />
                    Дух бани
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Банник, миропонимание, устройство бани по-черному и по-белому. Узнайте о сакральном пространстве,
                  где живет древний дух очищения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="Leaf" className="mr-3 text-accent" size={24} />
                    Путь банщика
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Календарь заготовки веников по Луне, искусство выбора растения. Секреты мастеров,
                  собранные за 20 лет практики.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="Droplets" className="mr-3 text-accent" size={24} />
                    Сердце ритуала
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Пошаговое проведение парения от первого захода до чаепития. Четкие инструкции для создания
                  настоящего ритуала.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="Sparkles" className="mr-3 text-accent" size={24} />
                    Банная магия
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Сильные обряды («Выпаривание хвори»), солевые скрабы, травяные коктейли. Рецепты,
                  которые работают на практике.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="Heart" className="mr-3 text-accent" size={24} />
                    Здоровье и безопасность
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Показания, строгие противопоказания, золотые правила. Важнейшая информация для безопасного
                  и эффективного парения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card rounded-lg px-6 border-2 border-border">
                <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                  <div className="flex items-center">
                    <Icon name="BookOpen" className="mr-3 text-accent" size={24} />
                    Голоса предков
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pt-4">
                  Рассказы хранителей традиций, байки и сказки. Живая мудрость, передающаяся из уст в уста.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Почему это руководство изменит ваш подход к бане навсегда?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Award" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">20 лет практики</h3>
                  <p className="text-center text-muted-foreground">
                    Знания от парамастера, а не кабинетного теоретика
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Users" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Живая традиция</h3>
                  <p className="text-center text-muted-foreground">
                    Ритуалы записанные со слов хранителей из русских деревень
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Brain" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Глубина и наука</h3>
                  <p className="text-center text-muted-foreground">
                    Соединение древней мудрости с современной физиологией
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="CheckSquare" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Практичность</h3>
                  <p className="text-center text-muted-foreground">
                    Четкие пошаговые инструкции, таблицы, чек-листы и рецепты
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Home" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Для всех</h3>
                  <p className="text-center text-muted-foreground">
                    Написана для тех, кто хочет возродить традицию в своей семье
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Shield" className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Безопасность</h3>
                  <p className="text-center text-muted-foreground">
                    Полная информация о противопоказаниях и правилах
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Прочтите фрагмент и почувствуйте атмосферу
            </h2>
            <Card className="bg-card/95 backdrop-blur border-2 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg italic text-muted-foreground mb-6 border-l-4 border-accent pl-6">
                    "Баня в русской традиции — это не просто место для мытья. Это священное пространство,
                    где смывается не только физическая грязь, но и духовная. Здесь живет Банник — хранитель
                    порога между мирами, который может как помочь, так и навредить тому, кто не чтит традиций..."
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    В старину знали: баня — это место силы. Здесь рождались, здесь исцелялись, здесь
                    проводили обряды очищения перед важными событиями. Пар, поднимающийся от раскаленных камней,
                    считался дыханием самой земли.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Веник — не просто пучок веток. Это инструмент, через который передается энергия дерева,
                    сила леса, целительная мощь растений. Каждое движение веником — это не удар, а поглаживание,
                    благословение, исцеление...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <img
                  src="https://cdn.poehali.dev/projects/2c5b8e43-82a3-42eb-95c3-298537649bf2/files/a4a5d2f0-1e01-4a30-adf2-c20b9247de93.jpg"
                  alt="Андрей Равинских"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold mb-6 text-foreground">Об авторе</h2>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Андрей Равинских</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
                  «Более двадцати лет моя жизнь неразрывно связана с исследованием традиционной русской бани.
                  Я не просто изучал технику — я искал ее душу.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
                  Эта книга — плод моего диалога с настоящими хранителями традиций, простыми банщиками,
                  чья мудрость передавалась из поколения в поколение.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  Я делюсь ею с вами, чтобы исконная сила русской бани продолжала жить».
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возродите традицию. Начните свой путь банщика сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Не откладывайте очищение и силу на потом. Получите книгу и превратите свой следующий поход
              в баню в настоящее таинство.
            </p>

            <Card className="bg-card text-card-foreground max-w-xl mx-auto shadow-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">Что вы получите:</h3>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <Icon name="Check" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Полноценный практикум в формате PDF/ePub</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Пожизненный доступ к цифровой версии</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Бонус: Чек-лист «Идеальный поход в баню»</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 py-4 border-y-2 border-accent">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-2">Цена всего</p>
                    <p className="text-5xl font-bold text-accent">200 ₽</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Цена чашки кофе — мудрость на всю жизнь
                    </p>
                  </div>
                </div>

                <form onSubmit={handleOrder} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-lg py-6"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                  >
                    Купить книгу за 200 ₽ <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center">
                  <Icon name="Shield" className="mr-2" size={16} />
                  Гарантия возврата денег в течение 14 дней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2024 Баня. Исконные традиции для тела и духа</p>
          <p className="text-sm">
            По вопросам:{' '}
            <a href="mailto:info@banya-book.ru" className="text-accent hover:underline">
              info@banya-book.ru
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
