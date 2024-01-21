# Math 101B

## Table of Contents

- [Math 101B](#math-101b)
  - [Table of Contents](#table-of-contents)
  - [Lecture one (1) - January 10 2024 - 2024/01/10](#lecture-one-1---january-10-2024---20240110)
    - [Area](#area)
    - [Area Functions](#area-functions)
    - [Riemann Sums](#riemann-sums)
      - [Trapezoid Rule](#trapezoid-rule)
      - [Defining the Integral](#defining-the-integral)
  - [Lecture 2 (two) - January 17 2024 - 2024/01/17](#lecture-2-two---january-17-2024---20240117)
    - [Basic properties of the definite integral](#basic-properties-of-the-definite-integral)
      - [Property 1](#property-1)
      - [Property 2](#property-2)
      - [Property 3](#property-3)
      - [Property 4](#property-4)
    - [The fundamental theorem of calculus pt1](#the-fundamental-theorem-of-calculus-pt1)
    - [The fundamental theorem of calculus pt2](#the-fundamental-theorem-of-calculus-pt2)
      - [Proof](#proof)
    - [Practice](#practice)

## Lecture one (1) - January 10 2024 - 2024/01/10

### Area

Area in the context of integrals is the area which lies between a function and the $x$-axis, there area is thus in the $xy$ plane.

We represent the definite integral as:

$\int_{a}^{b} f(x) \, dx$

Here are some examples of its usage:

1. $\int_{3}^{4} 3 \, dx  = 3$

    This function $3$ is a straight line, thus its integral (the area under its curve is a rectangle), so it's area is: $3 \cdot 1 = 3$

2. $\int_{-1}^{1} |x| \, dx = 1$

    Here we have the absolute value function, we know it's symmetric across the $y$-axis, so we can find the area on the right side and multiply it by $2$. The area under the function $x$ is a triangle, thus its formula is $\frac{1}{2}\text{base}\cdot\text{height}$ which in our case is $\frac{1}{2}1\cdot 1 = 0.5$, which we multiply by two for the other side: $0.5 \cdot 2 = 1$

3. $\int_{10}^{10} ln(x) \, dx = 0$

Here this may seem initially to be a hard problem, if you notice, the $\Delta x$ is actually $0$ as we're taking the integral from $10$ to $10$. Thus the solution to this problem is $0$

### Area Functions

$A(x) = \int_{a}^{x}f(t) \, dt$

Here we rename the variable $b$ to $x$ to represent we're working more generally now, with _area functions_ that is, the area under a graph, as a function of some $x$ value which represents a section of the graph. We are now using $t$ as the variable which represents the actual $y$ value of the function, that is to say: $y = f(t)$

Here are some examples of its usage:

1. $A(x) = \int_{0}^{x}7\, dt \quad (x>0)$

    Here $7$ is the function, it is a straight line. It's area as a function is thus a rectangle of arbitrary length: So its area as a function is $7x$; the $\text{Height}\times\text{Length}$

2. $B(x) = \int_{0}^{x}t\, dt \quad (x>0)$

    In this case, the function $t$ is analogous to the function $x$ from previous examples, it represents a line who's $y$ value is its $x$ value. Recognize that this is a triangle, who's area is $\frac{1}{2}\text{Base}\times\text{Height}$, thus its area as a function is $\frac{1}{2}x\cdot x = \frac{x^2}{2}$

3. $C(x)  = \int_{1}^{x}t\, dt (x>1)$

    This integral is slightly more complex, it represents a triangle with a smaller triangle cut out from the left hand side. To simplify how we might solve this function, we can recognize that we already have the equation for the area of a triangle as a function of its base length, this comes from example 2. it is $\frac{x^2}{2}$, if we plug in our "big" triangle we get $\frac{x^2}{2}$ (because x is still just x), now plugging in our "small" triangle we get: $\frac{1^2}{2} = \frac{1}{2}$ subtracting the small triangle from our big one we get $\frac{x^2}{x} - \frac{1}{2}$, which our area as a function for $C(x)$

### Riemann Sums

A Riemann sum is a way to approximate the area under a curve when the function may not be easy to compute, i.e. a polynomial, as opposed to $f(x)=x$.

If we wanted to determine the area of some function $g(x)$ on the interval $[a,b]$, where the function was not simple, we can divide this interval into an arbitrary number of sub-intervals $N$. This sum of the area of these rectangles is the _Riemann Sum_

Each on of these rectangular sub-intervals contains two _end points_, the left end point for example is $x_{N-1}$ and the right is $x_{N}$, we can choose either the left or right end point, or some arbitrary value in-between, $x_{N+a}$, where ${(N-1)}\leq a \leq N$. In lecture, the convention is the right end point. The width of each sub-interval is $\frac{b-a}{N}$, we call this value $\Delta x$.

So, the area of a function is the sum of its sub-interval's areas: $A \approx A_1+A_2+A_3 + ... + A_{N-1} + A_{N}$ which can be expressed in sigma notation as

$$\sum_{k=1}^{N}A_{k} = \sum_{k=1}^{N}f(x_k)\Delta x$$

Where the formula of $x_k$ is $a + k\Delta x$ for the right endpoint. First we offset the $x$-value by $a$, then we add the value of the width of the rectangle multiplied by the number of rectangles we have thus far seen, presented by $k$, the index.

Alternatively expressed (right rule): $\Delta x(f(x_{1})+f(x_{2})+...+f(x_{N-1})+f(x_{N}))$

_Note: we have factored $\Delta x$ out._

_Note: If we had done a left rule, we would have started with $x_{0}$ meaning $k=0$ would have been used in our sum_

Where $f(k_x)$ is some end point of a sub-interval. And multiplying it by $\Delta x$ gives the area of a sub-interval.

#### Trapezoid Rule

The left or right handed rule for Riemann sums often results in poor estimations. We can improve our approximations by using a trapezoid in place of rectangle. The dimensions of this trapezoid will be determined by the left & right hand rule applications of the Riemann method. Meaning we will cancel most of the error from each method. The left and right hand rules result in over or under estimations depending on the curvature of the function

A trapezoid's area is calculated as the average of its two heights, multiplied by its base, that is: $A_{k} = \frac{1}{2}(f(x_{k-1}) + f(x_{k}))\cdot \Delta x$

Therefore, area as a sum is:

$$\sum_{k=1}^{N}\frac{1}{2}(f(x_{k-1}) + f(x_{k}))\Delta x$$

$$=(\frac{1}{2}(f(x_{0}) + f(x_{1}))\Delta x + \frac{1}{2}(f(x_{1})+f(x_{2}))\Delta x + \frac{1}{2}(f(x_{N-1}) + f(x_{N}))\Delta x)$$

Notice that we can factor $\Delta x$ out, and distributing $\frac{1}{2}$ will result in only the first and last term having the $\frac{1}{2}$ multiplier, due to the fact that there are two occurrences of each other term, thus the sum can be expressed more simply as:

$$(\frac{1}{2}f(x_{0}) + f(x_{1}) + f(x_{2}) + ... + f(x_{N-1}) + \frac{1}{2}f(x_{ N}))\Delta x$$

#### Defining the Integral

Now notice that if we make $N$ equal $\infty$, we will have the perfect area of the function, thus we can define the _definite integral_ as:

$$\int_{a}^{b}f(x)\, dx = \lim_{N\to\infty}\sum_{k=1}^{N}f(x_{k})\Delta x$$

The limit exists if $f$ is continuous (or piecewise continuous) on $[a,b]$

Notice that our expression is using the right hand rule. Which hand we use does not matter, because as our width tends $0$, our error also tends to $0$. So using, left, right, middle, etc., rule is non-important.

## Lecture 2 (two) - January 17 2024 - 2024/01/17

### Basic properties of the definite integral

![Rules of the integral](image.png)

The first two rules can be said as the result of a function being _linear_ that is, when constants can come in and out, and when the sum is respected, the function must be linear. The definite integral is a linear function.

Caution: Rule one does not apply for the product of functions.

#### Property 1

$\int_{a}^{b}cf(x)dx = c\int_{a}^{b}f(x)dx$

Riemann sum: each rectangle height is $f(x_{k})\to cf(x_{k})$ so the area is $\text{area}\to c(\text{area})$

#### Property 2

Illustrating graphically, we can see that increases the value of the function we are taking the integral of is the same as adding two areas together.

#### Property 3

$\int_{b}^{a}f9x)dx = -\int_{a}^{b}f(x)dx$

This makes sense because the $\Delta x$ will be negative.

#### Property 4

$\int_{a}^{b}f(x)dx = \int_{a}^{c}f(x)dx + \int_{c}^{b}f(x)dx$

Note that this property holds even when $c$ is not between $a$ and $b$. $c$ can be to the right of left of either $a$ or $b$.

![Property 4 graphic representation](image-1.png)

Note that doing the integral from $a \to c$ will be negative, thus the area will still be correct

> We may need to justify these during a test

### The fundamental theorem of calculus pt1

Let $f$ be a function (continuous) on the interval $[a,b]$. Then its area function $A(x) = \int_{a}^{x}f(t)dt$ satisfies $\frac{d}{dx}A(x)=f(x)$

> Integrating and differentiating are "inverse"

Given $F(x) = \int_{0}^{x^2}\sin(t)dt$ then $F'(x) = 2x\cdot \sin(x^2)$

Write $F(x) = A(x^2)$ where $A(x) = \int_{0}^{x}\sin(t)dt$

Use the chain rule $F'(x) = A'(x^2)(2x) = \sin(x^2)2x$.

### The fundamental theorem of calculus pt2

Let $f$ be a continuous function on an interval $[a,b]$. Suppose $F$ is a function satisfying $F'(x) = f(x)$ on $(a,b)$. THen for $a \leq x \leq b$
$A(x) = \int_{a}^{x}f(t)dt = F(x) - F(a)$.

_A function $F$ satisfying $F' = f$ is an antiderivative of $f$._

#### Proof

From [FTC pt1](#the-fundamental-theorem-of-calculus-pt1) we know $A'(x) = f(x) = F'(x)$ so $\frac{d}{dx}[A(x)-F(x)] = A'(x)-F'9x) = 0$ for all $a < x < b$ Which means that $A(x)-F(x)$ is a constant on $[a,b]$ so $A(x)-F(x) = A(a) - F(a)$ thus $A(x)=F(x)-F(a)$ Note: we have removed $A(a)$ as the integral from $a$ to $a$ is $0$

### Practice

a) $\int 12x^2dx = 4x^3+c$\
b) $\int 4t^7dt = \frac{1}{2}t^8 + c$\
c) $\int cos(4x)dx = \frac{1}{4}\sin(4x)+c$\
d) $\int e^{2x}dx = \frac{1}{2}e^{2x} + c$\
e) $\int 4dy = 4x +c$\
f) $\int x^ndx = \frac{1}{n+1}x^{n+1} +c$\
g) $\int \frac{1}{x}dx = \ln(x) + c$
