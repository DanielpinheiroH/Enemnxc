{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "64c40a94",
   "metadata": {},
   "outputs": [
    {
     "ename": "SyntaxError",
     "evalue": "(unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \\UXXXXXXXX escape (3424305177.py, line 4)",
     "output_type": "error",
     "traceback": [
      "  \u001b[36mCell\u001b[39m\u001b[36m \u001b[39m\u001b[32mIn[1]\u001b[39m\u001b[32m, line 4\u001b[39m\n\u001b[31m    \u001b[39m\u001b[31mdb_path = \"C:\\Users\\Jonatas.Tavares\\Documents\\enemnxc\\backend\\app\\banco.db\"\u001b[39m\n              ^\n\u001b[31mSyntaxError\u001b[39m\u001b[31m:\u001b[39m (unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \\UXXXXXXXX escape\n"
     ]
    }
   ],
   "source": [
    "import pandas as pd\n",
    "from sqlalchemy import create_engine\n",
    "\n",
    "# Caminho para o arquivo Excel\n",
    "excel_path = \"questoes_enemnxc.xlsx\"  # coloque o caminho correto se estiver em outra pasta\n",
    "\n",
    "# Caminho para o banco de dados SQLite\n",
    "db_path = \"sqlite:///questoes_enemnxc.db\"\n",
    "\n",
    "# Lê as duas abas do Excel\n",
    "questoes_df = pd.read_excel(excel_path, sheet_name=\"questoes\")\n",
    "alternativas_df = pd.read_excel(excel_path, sheet_name=\"alternativas\")\n",
    "\n",
    "# Cria o engine SQLAlchemy\n",
    "engine = create_engine(db_path)\n",
    "\n",
    "# Insere os dados no banco\n",
    "questoes_df.to_sql(\"questoes\", engine, if_exists=\"append\", index=False)\n",
    "alternativas_df.to_sql(\"alternativas\", engine, if_exists=\"append\", index=False)\n",
    "\n",
    "print(\"✅ Dados inseridos com sucesso!\")"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "venv",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.12.4"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
