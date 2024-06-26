import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import globalParamsObject from "../../../../parameters/mainAppParameterObject";

const AvitoForms = (props: any) => {
    // let [searchParams, setSearchParams] = useSearchParams()
    // const avitoCategory =  searchParams.get("avitoCategory") || '5';

    //_____________________________________________________________________________________________
    return (
        <>
            <Form.Group
                as={Col}
                md="12"
                controlId="formGridState"
                className="mb-3"
            >
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Категория товаров:"
                >
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e: any) =>
                            props.changefilterObject({
                                avitoCategory: e.target.value,
                            })
                        }
                    >
                        <option key={0} value={0}>
                            Все категории
                        </option>
                        {globalParamsObject.real.avitoCategory.map(
                            (item: any, index: any) => {
                                return (
                                    <option key={index + 1} value={index + 1}>
                                        {item}
                                    </option>
                                );
                            }
                        )}
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
            { (props.filterObject.avitoCategory && Boolean(+props.filterObject.avitoCategory) ) && 
                <Form.Group
                    as={Col}
                    md="12"
                    controlId="formGridStateR"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingPasswordR"
                        label="Подкатегория товаров:"
                    >
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e: any) =>
                                props.changefilterObject({
                                    avitoSubCategory: e.target.value,
                                })
                            }
                        >
                            <option key={0} value={0}>
                                Все подкатегории
                            </option>
                            {(props.filterObject.avitoCategory && Boolean(+props.filterObject.avitoCategory) )&& globalParamsObject.real.avitoSubCategory[+props.filterObject.avitoCategory - 1].map(
                                (item: any, index: any) => {
                                    return (
                                        <option key={index + 1} value={index + 1}>
                                            {item}
                                        </option>
                                    );
                                }
                            )}
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            }
            <Form.Group
                as={Col}
                md="12"
                controlId="formGridState"
                className="mb-3"
            >
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Сортировать по:"
                >
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e: any) =>
                            props.changefilterObject({
                                itemSort: e.target.value,
                            })
                        }
                    >
                        <option value="createdAt">Дате публикации</option>
                        <option value="cost">Стоимости</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
            <Form.Group
                as={Col}
                md="12"
                controlId="formGridState"
                className="mb-3"
            >
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Порядок сортировки:"
                >
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e: any) =>
                            props.changefilterObject({
                                orderSort: e.target.value,
                            })
                        }
                    >
                        <option value="1">Убывание</option>
                        <option value="0">Возрастание</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>

        </>
    );
};

export default AvitoForms;
