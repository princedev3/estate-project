"use client"
import Image from 'next/image'
import React from 'react'

const chats = [
    {
        id:1,
        name:"prince",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"fejiro",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"vera",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"emma",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"emma",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"emma",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"emma",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
    {
        id:1,
        name:"emma",
        text:"hshshshshsh",
        createdAt:"06:27:2024",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"
    },
]
const Chat = () => {
  return (
    <div className='md:mx-10  gap-4 flex mx-4 mt-4 lg:h-[calc(100vh-217px)] flex-col lg:flex-row '>
        <div className="flex-[1.5] flex  flex-col p-3 max-h-[90vh] overflow-y-scroll no-scrollbar1 ">
        
      {
        chats.map(item=>(
            <div key={item.id} className="flex justify-between items-center p-3 ">
                <div className="flex gap-4 items-center">
                <div className="w-10 h-10 relative">
                <Image src={item.img} fill className='object-cover rounded-full'/>
                </div>
                <h3 className="">{item.name} </h3>
                </div>
                <h3 className="">{item.text} </h3>
                <p>{item.createdAt} </p>
            </div>
        ))
      }
            
      </div>
      <div className="flex-[2.5] my-5 lg:my-0 ">
        <div className="flex bg-blue-200 items-center p-2 gap-5">
        <div className="w-10 h-10 relative">
                <Image src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACUCAMAAADrljhyAAAAMFBMVEXk5ueutLenrrHf4uPn6eqrsbTq7O3b3t/Jzc+4vcC1ur3Gysyxt7rX2tu9wcTR1dbDLeoMAAAEQUlEQVR4nO2c23LjIAxAMQhsDIb//9sFN93EmTQBhCW66/PQzqR9OKMR4qoIcXFxcXFxcXFxcXFxcXHxLwIZbokidk21xSURo/r+ZFhAzNFZLaXUifRrsi7OYlhno5bgtZ4OaO1DFIbb7RVGOD896d6kJ+8GzA3l5Evdm7R0aihnEIt/45uRaxwoziDsB989zuOEGbZPAb4p+3kQ5aXINyvLyO2aAVcqnJ0X/ihXCQ+hXCecagazMhTn8F05cirDVi2cYKwYIHyDsLaMdblk4nihHLh8G5L4psyVyqrNN8NjbEJjiPMSg2XBrGR7jKeZQRgsQlg7BuEZITxNnj7IleuJZ+RCbqxWVIy1JzeOqBCnIFOnBTIpOAocUjgpExvPmGK8Q5wW6KQg340YXKXYCaRpYdBJMU2WUlgodFJQT3sRLzz5jTCRYelgPFGu68H9NmMTOgiTlrf/1dj9OuPfF2NS4x61gtS4+WzlAGk9xu5AyI1F05nmE8S3Ih3WbquiFDYdYmxpV/SYA6EbtCv6HsWC+EgWdUy4I0nTONFyn3DAU59XoE9YqG/J2m6ZHiBPitZbm78hDuQXC8itnma4U1eYsactfVIgD7JYbqcBUZJXBt+cyc3KbLfpa+udKfnscQO2xhBrhmF3U24cfJyvhZrygu3qPwFNSzhG4UT9zanmFW44Sd64jSHWJQblMfdPbBXKcoh3kDCXVgxNu+H/GVChKMw6DCK8Pz9+foz+wleyj7lHQH3cknDOG68AE+3rV/R7fKewjff4H0QM06u39FpOLo7ZYQFCxVXKJ125RjWm7w4Y2Fy+Zfd+3wauboPx0uEZY0DNW2JWYMbXzX1M5s7Y7VhmD26MzoUQrLXpZ3BL3Ob8F265AymMSqkt9zRJuTdhPQy8r4/2hiylhugjgxxWF1KJeDuDZPMpuLgpXmkwKjq76s9T9Le3t2GZ2aTTlJGnucqdXvp37xjWnHmyCO8T4Z21XJeZ9DE9iM35Zt+dlNWRzBkg2rLWq/eBThOioqh6RWvhYutw+pIjtw52uC69K2t38huyaHv67s7+xEZDM9t+CfGAX8wpziDK9p8NSH/CFjAViNbT4gL01D01UoBPSYi789r3sKj8EKVdueslKnQswT8ju3XBgXBnDbkjeu2zQgLV3nFVq+x7nGqA6rCGKHeOaGVa4Q43fQRF4glsf6SiFkYnBr1wSgzEXAJkVeJIc5Hr0FjTRuvlA/RooWiisaEa2ZaJou3rDAzu6RIO3bDE6PPEuNm44RkqouG8C9V5wVXY/rJW7rE5h90Xtd0ibKX4QbkuxvjHunjjqmZfxNcm9ENWpQV/iOve+/ZpUEFTU5M7dOr2oHjZCTP6yXkXytOCb9F2pOIFCX8x/qK4P1l1aE/pQvH+iX2G/qb0i0Sg5jnYqRR/vwzryvjAWpgVowy88tVQkMNQaKzG4YXdH8y5Ow3nGSvFAAAAAElFTkSuQmCC"} fill className='object-cover rounded-full'/>
                </div>
            <h3 className="capitalize font-semibold text-2xl">prince</h3>
        </div>

        <div className="w-full h-[300px] md:h-[240px] border overflow-y-scroll no-scrollbar1">
            <p className={`my-2`} style={{alignSelf:"flex-end",textAlign:"right"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-start",textAlign:"left"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-end",textAlign:"right"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-start",textAlign:"left"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-end",textAlign:"right"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-start",textAlign:"left"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-end",textAlign:"right"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
            <p className={`my-2`} style={{alignSelf:"flex-start",textAlign:"left"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tempore. </p>
        </div>
        <div className="">
            <form action="" className='flex  h-full'>
                <textarea name="" id="" cols="" rows={3} className='w-full outline-none border resize-none flex-[5] ' />
                <button className=' bg-yellow-700 text-white  h-[80px] flex-1 capitalize text-lg'>submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Chat