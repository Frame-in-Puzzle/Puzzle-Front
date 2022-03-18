import * as React from "react";

function MarkdownList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="23px" height="25px" viewBox="0 0 23 17" fill="none" {...props}>
      <path fill="url(#prefix__pattern79657)" d="M0 0h23v16.964H0z" />
      <defs>
        <pattern
          id="prefix__pattern79657"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_299_21"
            transform="scale(.00192 .0026)"
          />
        </pattern>
        <image
          id="prefix__image0_299_21"
          width={522}
          height={385}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgoAAAGBCAYAAAAHXpnTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABnJSURBVHgB7d09cxtXmi/wgwZdZWdQtJsNNB9ApBQ5WsPeYPZusNLMram7ASVxHEzV3sBvH8CilOxsZCnaO4kNSpSq7latbWW7wXooRxNZJKPZYCw4nEnEcKpEAvscqCFDJPgOvgD9+1W1utGEKAHV1effzzmnu5ZO2Pz8fKsoitlerzcXL5u1Wq0Z243Ybgy9bSP2b8T+Tixr8f5n3W53bXl5eSUBAGemlsZsYWGhEY38zWjwr8XLHA4a6eg2YlmJEPF1hIfH7XZ7IwEAp2ZsQSFXDmJ1LRr1m+l44WAv7Xq9fjsCQycBACfu2EEhB4QIB7dis5VOz0oEhl8JDABwso4cFHIXw+bm5t2ygnBWVBgA4ATV0xHcuHHjZrfb/Y8ICW+nszWXx0LMzc1trIUEAIzVoSoKuYoQDfOtCAkfpfPnblldMOARAMbkwEEhQkIzuhq+iirCXDq/OhEW3tUVcXbiOMmrxtbW1rU8JTaOl5/kY2bElFgAxijOtZ2h2ww8jeXJONrDAwWFHBLixP+72Gym809YOGWDcBCVpg/jAG2l0x3YCsAuIjw8jdW944SGfYPChIWEAWHhFGwLCLk7SsUA4Pw60gSAPYPChIaEAWHhBN24cSOvbgkIABOlF1WG2/fv37990L+wa1DIAxcjJOSSRTNNqPgyVqPc8q4BjuNTVhEubm5ufnnOx6sAsLsDX0wXu/0gz25IExwSsjyYLsLOrcRY5CpCdDMsxHf6nZAAMNFyj8F38/Pz1/Z748j7KFy/fn0hGtnfpOnw9tzcXMd9Fo6n7GpYjOPis1i/mQCYdG/FRd//iTYyRRP5ZLc37QgKeVxCNAZfpOnqd25duXLlt6urq39JHNpQSFCdAZgueQjCO3uFhR1dD9H3vJgmvMthhDze4rPEoUVZKnc3/FxIAJhatXyOz3ddHvnD4RflLIdnaUrFF/Hu8vLySuJABgMXcz9WMrMBYNo9r9frV7YPcHytohANwhdpipVPueSA4nioxfJNEhIAquBCVJC/3L7zVVDI1YQ0/XfUa+XHYif2lccllMGqmQCohKi8X452cnF436ugUI5NqIJ9p4JUXe5yKIrionEJANUTF4kf5HspDV73g0LeET+4mSogf87hL4CdIjTWYhESAKrpQrQBr54S3Q8K+Ul/qToaL168WEiMlKsJMzMzzaoERwB2Gq4qDLoerqYKibJ6pT7vYURozEsrAVBlr6oKg6DQStXi9sO76PV6eT7tBwmASouqwt/kdVHOAqhan33D7IfRym4HQQqAVu5+KPKDk1IFVfVz70e3AwADeQxjEVePzVRBRVHMJnaIAOV7ASDLXdGzOShUsmGID99M7FDV4wGAnXIxobIVhap+7v34XgAYMpvHKFT15kNuujSCSgsAQxp5eqSgAACM0igSAMAuBAW220gAUMpBoaoNgwZxhFqt5nsBYKBTVLhh0CCO0Ov1VhMApH6b0MmzHjqpgqr6ufcT38sPCQBeWisq3DCsJXaICpPvBYCsVxTFalHVUrOKwmhxUHydACD124QneYxCJYNCVT/3frrdbh67sZIAqLRcSGi3251ieXl5JVVvYN9G+bnZpvfSkwRAleVuh3t5Y3AfhapdXWsIdzEzM5Pq9Xo+OMwKAaiw3O3QX+c/otz8OFVIdDt8lRgpykz5+ePPo6pwLwFQVe3c7ZA3+kHhjTfeaKcKXUFGSqpUMDosVQWASutFG3Bn8KIfFCI1bMQV5FKqhpySNIB7UFUAqK44998ZVBOy4Wc9VGJaXKSk24l9LS8v58rLbbNDACrlWZz/F4d3vAoK5SyAlTTFIiWtDKck9hZBIY96/UXSBQFQBc/jYvq97Ttfe3pkNKRTfbUdfe+/ShxY2QXxLDY/SQBMszw1/v1RF9P14Rfr6+udS5cuXYxy81yaPu379+9XZRzG2MQxkeKYyN0PcVjUWgmAqZPHJUTPwv8b9bNi+4646v4oTV+puWNswtHl8QphcdorTgBVlM/t28clDKtv37G6uvqX2dnZP8XmtTQl4kr4o6WlJTdZOoaysrCSN+P7/Fms30wATLLn0b38fx8+fHh3rzfVdvvB/Pz83WgQPkwTLk/xi6T0UWIsFhYW8upiHFzfxLqZAJg4+TkO0YPw84MM8J/Z9QczM4vdbved+GWTPF6hkz9HYmzyAMfwLILkxVgvRpi8lQCYFBvlBfTiQf9Cba8fxtVjM64cf5cm88oxj0t413TIk1NWF5qbm5s5MNxMAJxX/YAQF893D3vTwdp+b5jQsCAknKJBYIjjpBUH4odTOmsGYOLk+wfF6slRAsLAvkEhm7CwICScoW2hYS5Cw2x6edw0EwAnZaNcVuPc+0O+q260hV+P45EFBwoK2SSEhcMMzgAA9lcc9I258Y10cvm8Piio7HtRSQCAMTpwRWHY9evXF2KVR7s309nbiErHx48ePWonAGCs6ukI1tfXV69cufK42+1eOOOBa+2ocvyvBw8e/D4BAGN3pIrCsHLswhex2UqnpBzFebt84iUAcEKOHRQGcmA44fn0eQ5ofqjT1wICAJyOsQWFgQgMjagw5OdEXE0vqwyNdHQ5HKwWRfF1LEvjmOYBABzc2IPCdvPz861o5Ge73e7FoTn1jfR6gBjM/+zkJc//jPevqRwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVUEsnbH5+PhVFkXq9Xv/fqtVqeXvH+wb78xLv73W73bS8vJwAgLMz9qCwsLCQciM/CAaxbkXDPxvr2XjZjEDQjO1GbDeG/tpG7N+I/Z1Y1uL9nfgda7Fvpf+frNV6OWy02+0EAJyesQWFXDnIv69erzeisb8Zy9V4PZdeDwSHtRHLSgSFx3mJ8LARv78nMADA6Th2UMgBoZYv+aNyEC+vxubNdLxwsJd2BIU7W1tbHYEBAE7ekYNC7mLY3NzMf78V4eDTvE6nZyWCwvsCAwCcrCIdwY0bN/LYgwux+UWEhG/S6YaErBUh4ftYfx7Lxfz/AQDG71AVhVxFyIMUyzEIn6WT62I4jE6Eldvx/1lSXQCA8TpwUChDwoVYPo3lo3T+3C2K4k6EhufCwtlZXFxMnU4nRcWnHyrztNfdpsQCMD7bbzOQXy8tLaXjOlBQyCEhXNzc3Pwy/uG5dH7lMQvvxfqZsHB6BuEgT4tN/WO11ojta3lKbGz/JB8zI6bEAjBGca7tDN1m4Gks38a5uBM/OlZo2DcoDEJCXCHmsQjNdP4JC6dkKCD0w0EcnB/G8k46/TErAIwQ5+bV9LLi/m2eAJArDYcNDHsGhQkMCQPCwgkrb6w1HBA+TCoGAOdZ/xYDce5+dv/+/QP/pV2DwgSHhAFh4QQMjUHIIeGWgAAwWeLcvRjn7jsHrS7sNT2yMcEhIWtGavoyacTG5pe//GX6/vvv80CZi7F8F8ut5PsFmChx7l6M1fcRGC6Wd1XeU33UzuvXr+fVP8fyd2my/XV8IW/Ozc3959raWuLocoVpZmYmV6AW4jv9Kj+zIwEwqXK3cb4J0X9HG/mHvdrIHUGhnAa5EJu/SdPh7WjUfrh8+fJqSBzeYDxCbN4q75/xZgJg0r0V7eM/5hkRs7OzT3YLC6O6Hpqx3EpTpGzcLiQO7de//vVwSJiq4wKAV10Rt3a7y/FrFYXy+Q13I1200nR5M76Iv7p06dLj9fX1xMHkgYt//vOf80H083j5rwmAafVOvg9DdEOsba8sbK8oXCyf/jiNFpL5/YeSZzcURfHTOCY+TwBMs/x4hs/yAMftP3gVFHI1YWtra6obhDyd7yAjPHl1PNSi2+G/kpkNAFVwIc75/769nRyuKDTT9F9xt5Kqwr5yl0P5nIY8JqGZAKiEOPdfjtXizZs/di70g0I5NmExVcO18mZS7CJ3OYSmwYsA1RMXiR/ku+4OXg8qCo0pHpvwmvJzKqXvIlcTcpdDLIsJgCq6EMWDjwZVhX5QiEbhWqqOxosXLxYSI+VqQr1eb0agupEAqKThqsKgonA1VUhRFJX6vIcRoTEvrQRAlfWrCnmjlkc3Rmp4nqpVjt+I/vcLy8vLiR/lboc//vGPeYrMd3FMzCUAqmwlLqzfzRWFVqpen33+vK3Ea4a6HYQEAPJNmBpFXD1WslGo6ufei24HAIblMYxFVZ8CGOWU2cRr8r0TBCgASv02YSaCQiUbzPjwzcRr8hPEwqUEAKnfLvykshWFqn7uveSg4HsBYMjsTFxZV/XmQ266tE0cC3nVTADwUiPPehAUAIBRGkUCANiFoMB2GwkASjkoVLVh0CBuUw5m9L0AMNApKtwwaBC3yYMZY1lNAJD67UIn35mxkyqoqp97L2VQ+CEBwEtrRYUbhrXEa6K61ItFRQGArFcUxdOiqqVmFYWd4oDIy+MEAKnfLnxbVPUK0pXzTktLS6nb7eaxGysJgErLhYR2u90plpeXV1L1BvZtlJ+bbXovPUkAVFnudribNwb3Uaja1bWGcBf1ej0v95JZIQCVlrsd+uv8R5SbK9UvHd0OXyVGyt0PW1tbz6OqcC8BUFXt3O2QN/pB4Y033minCl1BGrC3N1UFgErrRRtwZ/CiHxQiNWzEFeRSqoackjSAe1BVAKisPE7t9qCakA0/6+HrVAGRkm4n9rW8vJwrL7ejm+ZpAqAqnsX5/7V28lVQKGcBrKQpFinpd8Mpib3lGzBFWPjfsfk8ATDtnsfF9N9u3/na0yNzuSFNsZmZmfcTB1Z2QTyLzU8SANMsdzn8atTFdH34xfr6eufSpUvNuJKcS9Onff/+/aqMwxibOCZSHBN5+mwcFrVWAmDa9MclRM/Cb0f9sNi+I666P07TV2p+ZmzC0eXxCmGxrDj1EgDTYhASdm0j69t3rK6u/mV2dvZPsXktTYm4Ev44yuhusnQMZWVhJTbX4vv8WazfSgBMsufRvfxPDx8+3HOGW33UzmgUVqNRaESD8HaacJGU7j548OBfEseWw8Lly5f/UBTFv8X3+g+x60ICYNLkKsJq9CC8F+3jvhfRM7v+YGbmdrfbfSd+2eU0uZ7lz5EYmzzAMTybn5//aawXI0x+GutaAuC8y13H+b5J9/bqathuzxP8wsJCM8oS38TmxTR58riE90yHPDk3b97M3TrNzc3NHBhulLuFBoDz5VVAiIvne4e96eC+J/UJDQtCwikaBIY4TlpxIH4wNGtGaAA4G/2B53FOXonVk6MEhIEDncgnLCwICWdoW2iYi+1LsbtZLgCcjI1yWY1z7w9x7l2NtvDxOB5ZcOArvkkIC/HlPI3U9AshAQDGozjoG3PjG+nkSp5FkM7fXPo8gvNuHsEpJADA+BypD/n69esLscqj3c9DdSHPA/3k0aNH7QQAjFU9HUG+z8KVK1ced7vdfK+F2XQ2g9ZyVaMdVY6/f/Dgwe8TADB2x27gy7ELn8dmK51OYOiVozjvlE+8BABOyNga9hwYNjc3b0WF4ea4f3f6cQ5ovtvPYwEBAE7H2CsAERgaUWHIz4nIt/htxdI4wr81GCyZw8FqURSPY1kaxzQPAODgTryrYH5+vhWN/Gy3222W4xma6WV4aAy9bTD/s5OXeN9avH9N5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKiEWjph8/PzqSiK1Ov1+v9WrVbL2zveN9ifl3h/r9vtpuXl5QQAnJ2xB4WFhYWUG/lBMIh1Kxr+2VjPxstmBIJmbDdiuzH01zZi/0bs78SyFu/vxO9Yi30r/f9krdbLYaPdbicA4PSMLSjkykH+ffV6vRGN/c1YrsbrufR6IDisjVhWIig8zkuEh434/T2BAQBOx7GDQg4ItXzJH5WDeHk1Nm+m44WDvbQjKNzZ2trqCAwAcPKOHBRyF8Pm5mb++60IB5/mdTo9KxEU3hcYAOBkFekIbty4kcceXIjNLyIkfJNONyRkrQgJ38f681gu5v8PADB+h6oo5CpCHqRYjkH4LJ1cF8NhdCKs3I7/z5LqAgCM14GDQhkSLsTyaSwfpfPnblEUdyI0PBcWzlY+VqLi0w+VedrrblNiARif7bcZyK+XlpbScR0oKOQTf7i4ubn5ZfzDc+n8ymMW3ov1M2HhdA1Pi40DtBHb1/KU2DhefpKPmRFTYgEYozjXdoZuM/A0lm/jXNyJHx0rNOwbFAYhIa4Q81iEZjr/hIVTNAgIcRDmatOHsbyTTn/MCgAjxLl5Nb2suH+bJwDkSsNhA8OeQWECQ8KAsHAK8iDSoYDwYVIxADjP+rcYiIu7Z/fv3z/wX9o1KExwSBgQFk7IYGpsJNNbAgLAZIkLvMU4d985aHVhr+mRjQkOCVkzUtOXSSM2VuVU1IuxfBcH2q3k+wWYKHHuXozV9xEYLpZ3Vd5TfdTO69ev59U/x/J3abL9dXwhb87Nzf3n2tpa4njKkLAQAeyr/MyOBMCkyo9byCf1/4428g97tZE7gkI5DXIhNn+TpsPb0aj9cPny5dWQOJoyJCyW9894MwEw6d6K9vEf84yI2dnZJ7uFhVFdD81YbqUpUjZuFxJHUpamFsuuBgCmSNkVcWu3uxy/VlEoB6ndjXTRStPlzfgi/urSpUuP19fXEwdXTn/8eWz+awJgWr2T78MQ3RBr2ysL2ysKF8unP06jhWR+/1HkY+LzBMA0y49n+CwPcNz+g1dBobzt7lQ3CPEF3DrICE9eymWocuaLmQ0A0+9CVJD/fXs7OVxRaKbpv+JuJVWFAynvo7GYJnd6LACHFFWFy7FavHnzx86FflAoxyYspmq4VjaC7K1p8CJA9UT1/YNYXlWSBxWFxhSPTXhN+TmV0vdQseAIwOsuRBvw6inR/aAQ/dDXUnU0Xrx4sZDYS7MqwRGAnXJVIS4a+xfVg4rC1VQhRVFU6vMeVgTHVgKgyl5VFYpydGMrVcuc2Q+jlXfm/DABUGlRVfibvM4VhVaqXp99/rytxCi522EuAVB1rdz9UMTVYyUbhap+7v3odgBgII9hLKr6FMCiKGYTOwhQAJTy3Rpnc1CoZIMZH76Z2KGqxwMAO+ViQmUrClX93PvxvQAwZDaPUajqzYfcdGkElRYAhjTyrAdBAQAYpVEkAIBdCApst5EAoJSDQlUbBg3iCLVazfcCwECnqHDDoEEcodfrrSYASP02oZNnPXRSBVX1c+8nvpcfEgC8tFZUuGFYS+wQFSYVBQCyXlEUq0VVS80qCqPV6/WvEwCk/uMOnhRVvYJ05Txau93OYzdWEgCVlgsJ0SZ0iuXl5ZVUvYF9G+XnZoQ4OJ4kAKosdzvcyxuD+yhU7epaQ7iHmZmZu8msEIBKy90O/XX+o9vtPk4VEt0OXyV2lbsfoqpwLwFQVe3c7ZA3+kHhjTfeaKcKXUFGSqpUMDoKVQWAyurV6/U7gxf9oFBeQS6lamiXA/bYg6oCQCXFqb93Z1BNyIaf9VCJaXGRkm4nDmR5eXkxummeJgCq4lk+9w/veBUUylkAK2mKRUr63XBKYn/RTfOLWD1PAEy753Ex/bfbd7729MhoSKf6ajv63d9PHEoZrD5JAEyz3OXwq1EX0/XhF+vr651Lly41o9w8l6ZP+/79+1UZhzFWcVysxnERh0WtlQCYNjkk3I6ehd+O+mGxfUdcdX+cpq/U/MzYhOPJfVZlxamXAJgWg5CwaxtZ375jdXX1L7Ozs3+KzWtpSsSV8MdLS0tusnRMUVlYicrCWnyfP4uXbyUAJtnzra2tf3r48OGeM9zqo3aWpeZGNAhvpwkXSenugwcP/iUxFnFs/OHKlSv/P77Xq/HyQgJg0uQqwmr0ILwX7eO+F9Ezu/5gZuZ2t9t9J37Z5TS5nuXPkRircrDLT+fn5/P0yU9ju5YAOO9y13H/Hjl7dTVst+cJfmFhoRlliW9i82KaPHlcwnumQ56sfIxsbm7eisBws9wlNACcL68CQlw83zvsTQf3PalPaFgQEk5ZeZy04kD8YGjWjNAAcDb6A8/jnLwSqydHCQgDBzqRT1hYEBLO2FBomI3QMBu7muUCwMnYKJfVOPf+EOfe1WgLH4/jkQUHvuKbhLAQX87TSE2/EBIAYDyKg74xN76RTq7kWQTp/M2lzyM47+YRnEICAIzPkfqQr1+/vhCrPNr9PFQX8jzQTx49etROAMBY1dMR5PssXLly5XG3222UfdBnMWgtVzXaUeX4+wcPHvw+AQBjd+wGvhy78HlsttLpBIZeOYrzTvnESwDghIytYT/h+fSDOaD5oU6PBQQAOB1jrwBEYGhEhSE/J+If0ssqQ+MI/9ZgsGQOB6tFUTyOZWkc0zwAgIM78a6C+fn5VjTys91utzk0p76RfgwQ2WD+Zycv8b61eP+aygEAnK3/AY7l0LbXnsr5AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

const MemoMarkdownList = React.memo(MarkdownList);
export default MemoMarkdownList;