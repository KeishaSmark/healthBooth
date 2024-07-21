import re
import enum

from fastapi import status, HTTPException

from pydantic import BaseModel, Field, field_validator, field_validator

from typing import Annotated, Optional

from typing_extensions import Self


class UserType(enum.Enum):
    doctor = "doctor"
    patient = "patient"


class Login(BaseModel):
    username: Annotated[str, Field(min_length=2)]
    password: Annotated[str, Field(min_length=8)]

    @field_validator("password")
    @classmethod
    def validate_password(cls, v):
        if not re.search(r"[A-Z]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one uppercase letter",
            )
        if not re.search(r"[a-z]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one lowercase letter",
            )
        if not re.search(r"\d", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one number",
            )
        if not re.search(r"[@$!%*?&#]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one special character",
            )
        return v


class User(BaseModel):
    first_name: Annotated[str, Field(min_length=2)]
    last_name: Annotated[str, Field(min_length=2)]
    username: Annotated[str, Field(min_length=2)]
    dob: Annotated[str, Field(pattern=r"^\d{2}-\d{2}-\d{4}$")]
    password: Annotated[str, Field(min_length=8)]
    verify_password: Annotated[str, Field(min_length=8)]
    lang: Annotated[str, Field(min_length=2)]
    type: Annotated[UserType, Field()]

    @field_validator("password")
    @classmethod
    def validate_password(cls, v):
        if not re.search(r"[A-Z]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one uppercase letter",
            )
        if not re.search(r"[a-z]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one lowercase letter",
            )
        if not re.search(r"\d", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one number",
            )
        if not re.search(r"[@$!%*?&#]", v):
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Password must contain at least one special character",
            )
        return v
