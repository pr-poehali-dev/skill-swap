import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const exchangeExamples = [
    {
      offered: "Дизайн логотипа",
      wanted: "Урок испанского",
      credits: "2 кредита",
      avatar: "🎨",
      name: "Анна",
    },
    {
      offered: "Ремонт велосипеда",
      wanted: "Помощь с SEO",
      credits: "1 кредит",
      avatar: "🔧",
      name: "Михаил",
    },
    {
      offered: "Урок программирования",
      wanted: "Фотосессия",
      credits: "2 кредита",
      avatar: "💻",
      name: "Дмитрий",
    },
  ];

  const benefits = [
    {
      icon: "Wallet",
      title: "Экономия денег",
      description: "Обменивайтесь навыками без финансовых затрат",
    },
    {
      icon: "Users",
      title: "Нетворкинг",
      description: "Знакомьтесь с интересными людьми и расширяйте связи",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Система рейтингов и отзывов защищает от мошенников",
    },
    {
      icon: "TrendingUp",
      title: "Развитие навыков",
      description: "Практикуйте свои умения и изучайте новое",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="ArrowLeftRight" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkillSwap
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Меняй навыки без денег
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            1 час твоего времени = 1 кредит
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Платформа для обмена услугами и навыками. Предложи свои умения и
            получи то, что нужно тебе.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold">
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Начать обмен
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  <Icon name="HelpCircle" className="mr-2 h-5 w-5" />
                  Как это работает?
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Как работает SkillSwap?</DialogTitle>
                  <DialogDescription className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Создайте профиль</h4>
                        <p className="text-sm text-muted-foreground">
                          Укажите ваши навыки и что вам нужно
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Найдите партнера</h4>
                        <p className="text-sm text-muted-foreground">
                          Используйте поиск и фильтры
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Обменяйтесь услугами</h4>
                        <p className="text-sm text-muted-foreground">
                          1 час работы = 1 кредит
                        </p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="relative">
            <img
              src="/img/c4222900-a0d5-41ba-9e51-b976550f0783.jpg"
              alt="Платформа обмена навыками"
              className="mx-auto max-w-2xl w-full rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      {/* Exchange Examples */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Примеры обменов</h2>
          <p className="text-xl text-muted-foreground">
            Посмотрите, как другие пользователи обмениваются навыками
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {exchangeExamples.map((example, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{example.avatar}</div>
                <CardTitle className="text-lg">{example.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Предлагает
                    </Badge>
                    <p className="font-semibold text-primary">
                      {example.offered}
                    </p>
                  </div>

                  <Icon
                    name="ArrowUpDown"
                    className="mx-auto h-6 w-6 text-muted-foreground"
                  />

                  <div>
                    <Badge variant="outline" className="mb-2">
                      Ищет
                    </Badge>
                    <p className="font-semibold text-secondary">
                      {example.wanted}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      {example.credits}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20 bg-white/50 rounded-3xl mx-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Преимущества платформы</h2>
          <p className="text-xl text-muted-foreground">
            Почему стоит выбрать SkillSwap
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать обмен навыками?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к сообществу людей, которые делятся знаниями и
            помогают друг другу
          </p>
          <Button size="lg" className="px-12 py-6 text-xl font-semibold">
            <Icon name="UserPlus" className="mr-2 h-6 w-6" />
            Создать профиль
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ArrowLeftRight" className="h-6 w-6" />
                <span className="text-xl font-bold">SkillSwap</span>
              </div>
              <p className="text-gray-400">
                Платформа для обмена навыками без денег
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Как это работает</li>
                <li>Безопасность</li>
                <li>Поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Программирование</li>
                <li>Дизайн</li>
                <li>Обучение</li>
                <li>Ремонт</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@skillswap.ru</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillSwap. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
